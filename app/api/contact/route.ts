import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // We're now using Formspree for email handling
    // This route is kept for backward compatibility
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully. Please use the Formspree integration for email delivery.",
    })
  } catch (error) {
    console.error("Error in contact API route:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
