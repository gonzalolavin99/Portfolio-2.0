const twilio = require('twilio');
require (dotenv).config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsApp = async(to, body) =>{
    try{
        await client.messages.create({
            body,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            to: `whatsapp:${to}`
        });
        console.log('Message sent');
    } catch(error){
        console.error('Error sending WhatsApp message:', error);
    }
};

module.exports = {sendWhatsApp};