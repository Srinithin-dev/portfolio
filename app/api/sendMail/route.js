import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.FromEmail,
        pass: process.env.googleEmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.FromEmail}>`,
      to: process.env.FromEmail,
      replyTo: body.email,
      subject: `📩 New Portfolio Message from ${body.name}`,

      text: `
New Portfolio Contact Message

Name: ${body.name}
Email: ${body.email}

Message:
${body.message}
      `,

      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f6f8fb; padding:40px;">
        <div style="max-width:650px; margin:auto; background:white; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">

          <div style="background:#af47ff; padding:24px;">
            <h2 style="color:white; margin:0;">
              📩 New Portfolio Contact Message
            </h2>
          </div>

          <div style="padding:32px;">

            <p style="font-size:16px; color:#374151;">
              Someone has contacted you through your portfolio.
            </p>

            <table
              cellpadding="10"
              cellspacing="0"
              style="width:100%; border-collapse:collapse; margin-top:20px;"
            >
              <tr>
                <td style="font-weight:bold; width:140px;">Name</td>
                <td>${body.name}</td>
              </tr>

              <tr style="background:#f9fafb;">
                <td style="font-weight:bold;">Email</td>
                <td>
                  <a href="mailto:${body.email}">
                    ${body.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold;">Message</td>
                <td style="white-space:pre-line;">
                  ${body.message}
                </td>
              </tr>
            </table>

            <hr style="margin:30px 0; border:none; border-top:1px solid #e5e7eb;" />

            <a
              href="mailto:${body.email}"
              style="
                display:inline-block;
                background:#af47ff;
                color:white;
                text-decoration:none;
                padding:12px 24px;
                border-radius:8px;
                font-weight:bold;
              "
            >
              Reply to ${body.name}
            </a>

          </div>

          <div
            style="
              background:#f9fafb;
              text-align:center;
              padding:18px;
              font-size:13px;
              color:#6b7280;
            "
          >
            This email was generated automatically from your portfolio contact form.
          </div>

        </div>
      </div>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      {
        status: 500,
      },
    );
  }
}
