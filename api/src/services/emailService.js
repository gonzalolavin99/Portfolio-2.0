// Import the 'nodemailer' module to handle sending emails in Node.js
const nodemailer = require("nodemailer");

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Create a transporter object using the default SMTP transport, specifying the service and authentication details
const transporter = nodemailer.createTransport({
  service: "gmail", // Specifies the email service (in this case, Gmail)
  auth: {
    user: process.env.EMAIL_USER, // The email address that will send the emails (stored in an environment variable)
    pass: process.env.EMAIL_PASS, // The password or app-specific password for the email account (stored in an environment variable)
  },
});

// Define an asynchronous function to send an email
const sendEmail = async (to, subject, text) => {
  // Configure the email options, including the sender, recipient, subject, and text body
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address (the same email as the one used for authentication)
    to,
    subject,
    text,
  };

  try {
    // Attempt to send the email using the transporter and the defined mail options
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Export the sendEmail function to use it in other parts of the application
module.exports = { sendEmail };
