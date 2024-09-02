// Import the 'twilio' module to interact with the Twilio API for sending messages
const twilio = require("twilio");

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Create a Twilio client using the Account SID and Auth Token from environment variables
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Define an asynchronous function to send a WhatsApp message
const sendWhatsApp = async (to, body) => {
  try {
    // Use the Twilio client to create and send a WhatsApp message
    await client.messages.create({
      body, // The content of the message to be sent
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, // The Twilio WhatsApp number (from environment variables)
      to: `whatsapp:${to}`, // The recipient's WhatsApp number, passed as an argument
    });
    console.log("Message sent"); // Log a success message if the WhatsApp message is sent
  } catch (error) {
    console.error("Error sending WhatsApp message:", error); // Log an error message if something goes wrong
  }
};

// Export the sendWhatsApp function to use it in other parts of the application
module.exports = { sendWhatsApp };
