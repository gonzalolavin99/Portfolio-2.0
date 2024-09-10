const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://gonzalo-lavin.vercel.app"];

// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    console.log("Se esta validando el siguiente origin: " + origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

// Middleware error handler
app.use(errorHandler);

module.exports = app;