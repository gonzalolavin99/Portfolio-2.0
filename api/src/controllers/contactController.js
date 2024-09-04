const Contact = require('../models/contactModel.js');
const { sendEmail } = require('../services/emailService');
const { sendWhatsApp } = require('../services/whatsappServices.js');
const sequelize = require('../config/db');

exports.submitContact = async (req, res) => {
  console.log('Data received:', req.body);
  const t = await sequelize.transaction();

  try {
    const { name, email, company, phone, message } = req.body;

    // Validación
    if (!name || !email || !phone || !message) {
      console.log('Validación fallida:', { name, email, phone, message });
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    console.log('Creating contact...');
    const contact = await Contact.create({ name, email, company, phone, message }, { transaction: t });
    console.log('Contact created:', contact);

    console.log('Sending email...');
    await sendEmail(
      process.env.YOUR_EMAIL,
      'Someone is trying to contact with you',
      `Nombre: ${name}\nEmpresa: ${company || 'No especificada'}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
    );
    console.log('Email sended');

    console.log('Sending WhatsApp...');
    await sendWhatsApp(
      process.env.YOUR_WHATSAPP,
      `Someone is trying to connect with you:\nNombre: ${name}\nEmpresa: ${company || 'No especificada'}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
    );
    console.log('WhatsApp sent');

    await t.commit();
    console.log('Transaction ok!');
    res.status(201).json({ message: 'Form successfully sent', contact });
  } catch (error) {
    await t.rollback();
    console.error('Error processing the form:', error);
    res.status(500).json({ message: 'Error al procesar el formulario', error: error.message });
  }
};