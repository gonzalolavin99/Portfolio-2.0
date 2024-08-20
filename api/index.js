//Importaciones 
const express = require ('express');
const dotenv = require ('dotenv');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {Pool} = require ('pg');


const app = express();

dotenv.config();

//Middlewares
app.use(express.json());

//Rutas
app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get("/perfil", (req,res)=>{
    res.send("Gonzalo")
});

app.listen(3000, console.log("Servidor iniciado!"));



