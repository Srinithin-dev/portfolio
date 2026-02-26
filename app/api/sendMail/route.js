import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.FromEmail,
      pass: process.env.googleEmailPassword,
    },
  });

  const currentDate = new Date().toLocaleString();
  try {
    const emailSendingResult = await transporter.sendMail({
      from: `"Portfolio Contact Bot" <${process.env.FromEmail}>`,
      to: process.env.FromEmail,
      subject: `📩 New Portfolio Message from ${body.name}`,
      replyTo: body.email,
      text: `
New message received from your portfolio.

Name: ${body.name}
Email: ${body.email}
Message:
${body.message}

Received At: ${currentDate}
    `,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          
          <h2 style="color: #af47ff;">📩 New Portfolio Message</h2>
          
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          
          <hr style="margin: 20px 0;" />
          
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 12px; border-radius: 6px;">
            ${body.message}
          </p>
          
          <hr style="margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #6b7280;">
            Received at: ${currentDate}
          </p>
        </div>
      </div>
    `,
    });

    return Response.json({
      status: 200,
      ok: true,
      message: "Message sent successfully!",
      info: emailSendingResult,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      ok: false,
      message: "Failed to send message. Please try again later.",
    });
  }
}
