const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_NODEMAILER,
    pass: process.env.PASS_NODEMAILER,
  },
});

async function main(req, res) {
  try {
    const { name, email, subject, message } = req.body;
    const info = await transporter.sendMail({
      from: `${name} - <foo@example.com>${email}`,
      email,
      to: process.env.MAILBOX,
      subject,
      html: message,
    });
    res.json({ message: "Email enviado exitosamente!" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
