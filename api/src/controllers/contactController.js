const Contact = require('../models/Contact');
const { sendEmail } = require('../services/emailService');
const { sendWhatsApp } = require('../services/whatsappService');
const sequelize = require('../config/database');

exports.submitContact = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { name, company, email, message } = req.body;

    // Guardar en la base de datos dentro de una transacción
    const contact = await Contact.create({ name, company, email, message }, { transaction: t });

    // Enviar email
    await sendEmail(
      process.env.YOUR_EMAIL,
      'Nuevo formulario de contacto',
      `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nMensaje: ${message}`
    );

    // Enviar WhatsApp
    await sendWhatsApp(
      process.env.YOUR_WHATSAPP,
      `Nuevo contacto:\nNombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nMensaje: ${message}`
    );

    // Si todo ha ido bien, confirmamos la transacción
    await t.commit();

    res.status(201).json({ message: 'Formulario enviado con éxito', contact });
  } catch (error) {
    // Si algo ha fallado, revertimos la transacción
    await t.rollback();
    console.error('Error al procesar el formulario:', error);
    res.status(500).json({ message: 'Error al procesar el formulario' });
  }
};