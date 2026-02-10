const { getTransporter } = require("../config/email");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = getTransporter();

  if (!transporter) {
    console.error("[Email] Cannot send email: SMTP not configured");
    throw new Error("Email service is not configured");
  }

  const mailOptions = {
    from: `"${process.env.FROM_NAME || "LogoForge"}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = sendEmail;
