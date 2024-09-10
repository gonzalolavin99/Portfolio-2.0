const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://gonzalo-lavin.vercel.app"];

// Configuración de CORS
const corsOptions = {
  origin: function (origin, callback) {
    console.log("Se esta validando el siguiente origin: " + origin);
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.use('/api/contact', contactRoutes);

// Middleware error handler
app.use(errorHandler);

module.exports = app;