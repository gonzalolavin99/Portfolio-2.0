const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const sequelize = require('./config/db.js');
const errorHandler = require('./middlewares/errorHandler');

const app = express();


const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];
// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    console.log("Se esta validando el siguiente origin: "+origin)
    if (allowedOrigins.find((o) => o == origin) || env().isLocal) {
    
      callback(null, true);
    } else {
      
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

// Middleware error handler
app.use(errorHandler);

module.exports = app;