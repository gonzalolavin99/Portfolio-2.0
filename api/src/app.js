const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const sequelize = require('./config/db.js');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

// Middleware error handler
app.use(errorHandler);

module.exports = app;