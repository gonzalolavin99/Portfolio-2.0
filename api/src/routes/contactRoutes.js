const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateContact = require('../middlewares/validateContact');

router.post('/submit', validateContact, contactController.submitContact);

module.exports = router;