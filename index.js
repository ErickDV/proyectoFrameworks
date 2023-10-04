const morgan = require('morgan');
const express = require('express');
const app = express();
const admin = require('./routes/administrador');
const alumno = require('./routes/alumno');
const login = require('./routes/login');

app.use(morgan('dev'));
app.use(express.json()); //use para que una funcion se le aplique a todas las peticiones middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) =>{
    res.status(200).json({code: 200, message: "ggbrogg"})
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log("server is running...");
});