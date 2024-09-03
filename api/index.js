//Importaciones 
const express = require ('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./src/routes/contactRoutes');
const sequelize = require('./src/config/db');
const errorHandler = require('./src/middlewares/errorHandler');


const app = express();

app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

//Middleware error handler
app.use(errorHandler);

//Sincronizar con la base de datos
sequelize.sync()
.then(() => console.log('Database ON!'))
.catch(err => console.error('Something went wrong with the Database :('));

module.exports = app;

app.listen(3000, console.log("Servidor iniciado!"));



