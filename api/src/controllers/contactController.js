const Contact = require('../models/contactModel');
const {sendEmail} = require('../services/emailService');
const {sendWhatsApp} = require('../services/whatsappServices');

exports.submitContact = async (req,res) =>{
    try{
        const {name, company, email, phone, message} = req.body;
    
        //Save in the DB 
        const contact = await Contact.create({name, company, email, phone, message});
    
        //Send email
        await sendEmail(
            process.env.EMAIL_USER,
            'Nuevo formulario de contacto',
            `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nPhone: ${phone}\nMensaje: ${message}`
        );
    
        res.status(201).json({message: 'Formulario enviado con éxito', contact});
    }catch(error){
        console.error('Error al procesar el formulario', error);
        res.status(500).json({message: 'Error al procesar el formulario'});
    }

};