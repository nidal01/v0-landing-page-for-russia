import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, country, phone, email, message } = body

    // Validate required fields
    if (!name || !company || !country || !phone || !email) {
      return NextResponse.json(
        { error: "Все обязательные поля должны быть заполнены" },
        { status: 400 }
      )
    }

    // SMTP_USER veya SMTP_FROM kullanılabilir
    const smtpUser = process.env.SMTP_USER || process.env.SMTP_FROM

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !smtpUser || !process.env.SMTP_PASSWORD) {
      console.error("[v0] SMTP not configured:", {
        host: !!process.env.SMTP_HOST,
        user: !!smtpUser,
        pass: !!process.env.SMTP_PASSWORD,
      })
      return NextResponse.json(
        { error: "SMTP ayarları yapılandırılmamış. Lütfen environment variables kontrol edin." },
        { status: 500 }
      )
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Country mapping
    const countryNames: Record<string, string> = {
      RU: "Россия",
      AZ: "Азербайджан",
      KZ: "Казахстан",
      UZ: "Узбекистан",
      TM: "Туркменистан",
      KG: "Кыргызстан",
      TJ: "Таджикистан",
      GE: "Грузия",
      OTHER: "Другая",
    }

    // Email content
    const mailOptions = {
      from: `"Romano Botta Форма" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Новая заявка от ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A96E; border-bottom: 2px solid #C9A96E; padding-bottom: 10px;">
            Новая заявка с сайта Romano Botta
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Имя:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Компания:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Страна:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${countryNames[country] || country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Телефон:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #229ED9;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #229ED9;">${email}</a>
              </td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Сообщение:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            Это автоматическое сообщение от формы на сайте romanobotta.com
          </p>
        </div>
      `,
      text: `
Новая заявка с сайта Romano Botta

Имя: ${name}
Компания: ${company}
Страна: ${countryNames[country] || country}
Телефон: ${phone}
Email: ${email}
${message ? `Сообщение: ${message}` : ''}
      `.trim(),
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Заявка успешно отправлена" })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata"
    return NextResponse.json(
      { error: `E-posta gönderilemedi: ${errorMessage}` },
      { status: 500 }
    )
  }
}
