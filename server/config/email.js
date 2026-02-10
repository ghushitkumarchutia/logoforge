const nodemailer = require("nodemailer");

const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn(
      "[Email] SMTP not configured. Password reset emails will not be sent.",
    );
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: parseInt(process.env.SMTP_PORT, 10) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    transporter = createTransporter();
  }
  return transporter;
};

module.exports = { getTransporter };
