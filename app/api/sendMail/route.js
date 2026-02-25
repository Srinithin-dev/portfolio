import nodemailer from "nodemailer";
export async function POST(request) {
  console.log("API hit");

  const body = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: "nithinsri53@gmail.com",
      pass: "uvel bjxd xxov vrle",
    },
  });
  await transporter.sendMail({
    from: '"Message bot"<your@gmail.com>', // sender address
    to: "nithinsri53@gmail.com", // list of receivers
    subject: `Message from ${body.name}`, // Subject line
    text: JSON.stringify("message"), // plain text body
    html: "emailHtml", // html body
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
  });
}
