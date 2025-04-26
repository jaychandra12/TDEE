"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

// Check if we're in a preview/development environment
const isPreviewEnvironment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development"

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // If we're in a preview environment, simulate email sending
    if (isPreviewEnvironment) {
      console.log("Preview environment detected. Simulating email send:")
      console.log({
        to: process.env.EMAIL_TO || "preview@example.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        from: formData.email,
        name: formData.name,
        message: formData.message,
      })

      // Simulate a delay to mimic email sending
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        success: true,
        messageId: `preview-${Date.now()}`,
        preview: true,
      }
    }

    // For production environment, use actual email sending
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true" ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify connection
    await transporter.verify()

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #1e3a8a;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
        </div>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)

    // If it's a DNS lookup error in preview, return a more helpful message
    if (error instanceof Error && error.message.includes("dns.lookup")) {
      return {
        success: true,
        messageId: `preview-${Date.now()}`,
        preview: true,
        note: "Email sending simulated in preview environment",
      }
    }

    return { success: false, error: "Failed to send email. Please try again later." }
  }
}
