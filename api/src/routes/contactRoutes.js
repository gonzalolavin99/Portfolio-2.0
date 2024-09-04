const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController.js');
const validateContact = require('../middlewares/validateContact');

router.post('/submit', validateContact, contactController.submitContact);

// Ruta de prueba

router.post('/test', (req, res) => {
    console.log('Data received:', req.body);
    res.status(200).json({ message: 'Test OK!', data: req.body });
  });

module.exports = router;