import nodemailer from 'nodemailer';

export async function sendEmail(to: string, text: string) {
//   let testAccount = await nodemailer.createTestAccount();
//   console.log('testAccount', testAccount);

  let trasporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: "ayorxzu6sxfvbu3o@ethereal.email",
      pass: "vgV18EtMfDcNxKZVwY",
    },
  });

  let info = await trasporter.sendMail({
      from: '"freed foo" <foo@example.com>',
      to: to,
      subject: "cange password",
      html: text,
  })

  console.log("message sent", info.messageId);

  console.log("preview url", nodemailer.getTestMessageUrl)
}
