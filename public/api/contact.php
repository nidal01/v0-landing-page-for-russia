<?php
// Error reporting - geliştirme için açık, production'da kapatın
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Custom error handler
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    http_response_code(500);
    echo json_encode(['error' => "PHP Error: $errstr"]);
    exit();
});

// Exception handler
set_exception_handler(function($exception) {
    http_response_code(500);
    echo json_encode(['error' => "Exception: " . $exception->getMessage()]);
    exit();
});

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// SMTP Configuration - Bu değerleri kendi bilgilerinizle doldurun
$smtp_host = 'mail.digitalup.tr';
$smtp_port = 465;
$smtp_user = 'romano@digitalup.tr';
$smtp_password = '[jd;MUX0E-l^';
$smtp_from = 'romano@digitalup.tr';
$smtp_from_name = 'Romano Botta Website';
$smtp_to = 'nidalirfanuymaz@gmail.com';

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

// Validate required fields
$required = ['name', 'company', 'country', 'phone', 'email'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Field '$field' is required"]);
        exit();
    }
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($data['name']));
$company = htmlspecialchars(strip_tags($data['company']));
$country = htmlspecialchars(strip_tags($data['country']));
$phone = htmlspecialchars(strip_tags($data['phone']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : 'Сообщение не указано';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email content
$subject = "Новая заявка с сайта Romano Botta - $company";
$email_body = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #c9a45c; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { color: #555; }
        .footer { background: #1a1a1a; color: #888; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Romano Botta</h1>
            <p>Новая заявка с сайта</p>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Имя:</span>
                <span class='value'>$name</span>
            </div>
            <div class='field'>
                <span class='label'>Компания:</span>
                <span class='value'>$company</span>
            </div>
            <div class='field'>
                <span class='label'>Страна:</span>
                <span class='value'>$country</span>
            </div>
            <div class='field'>
                <span class='label'>Телефон:</span>
                <span class='value'>$phone</span>
            </div>
            <div class='field'>
                <span class='label'>Email:</span>
                <span class='value'>$email</span>
            </div>
            <div class='field'>
                <span class='label'>Сообщение:</span>
                <p class='value'>$message</p>
            </div>
        </div>
        <div class='footer'>
            <p>Romano Botta - Турецкая кожаная обувь премиум-класса</p>
        </div>
    </div>
</body>
</html>
";

// Direct SMTP connection function
function send_smtp_mail($to, $subject, $body, $from_email, $from_name, $host, $port, $user, $pass) {
    $errno = 0;
    $errstr = '';
    
    // Connect with SSL for port 465
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    $socket = stream_socket_client(
        "ssl://$host:$port",
        $errno,
        $errstr,
        30,
        STREAM_CLIENT_CONNECT,
        $context
    );
    
    if (!$socket) {
        return ['success' => false, 'error' => "Connection failed: $errstr ($errno)"];
    }
    
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "Server response: $response"];
    }
    
    // EHLO
    fputs($socket, "EHLO localhost\r\n");
    $response = '';
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // Check if AUTH is supported
    if (strpos($response, 'AUTH') === false) {
        fclose($socket);
        return ['success' => false, 'error' => "EHLO Response: " . str_replace(["\r", "\n"], " | ", trim($response))];
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "AUTH LOGIN failed: $response"];
    }
    
    // Send username
    fputs($socket, base64_encode($user) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Username failed: $response"];
    }
    
    // Send password
    fputs($socket, base64_encode($pass) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '235') {
        fclose($socket);
        return ['success' => false, 'error' => "Password failed: $response"];
    }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM:<$from_email>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "MAIL FROM failed: $response"];
    }
    
    // RCPT TO
    fputs($socket, "RCPT TO:<$to>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "RCPT TO failed: $response"];
    }
    
    // DATA
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '354') {
        fclose($socket);
        return ['success' => false, 'error' => "DATA failed: $response"];
    }
    
    // Email headers and body
    $headers = "From: $from_name <$from_email>\r\n";
    $headers .= "To: $to\r\n";
    $headers .= "Subject: $subject\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "\r\n";
    
    fputs($socket, $headers . $body . "\r\n.\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "Send failed: $response"];
    }
    
    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return ['success' => true];
}

// Try to send email via direct SMTP
$result = send_smtp_mail(
    $smtp_to,
    $subject,
    $email_body,
    $smtp_from,
    $smtp_from_name,
    $smtp_host,
    $smtp_port,
    $smtp_user,
    $smtp_password
);

if ($result['success']) {
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Не удалось отправить письмо: ' . ($result['error'] ?? 'Unknown error')
    ]);
}
?>
