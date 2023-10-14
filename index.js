//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const admin = require('./routes/administrador');
const alumno = require('./routes/alumno');
const user = require('./routes/user');

//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json()); //use para que una funcion se le aplique a todas las peticiones middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) =>{
    res.status(200).json({code: 200, message: "index"})
});
app.use("/user",user);
app.use(auth);
// app.use("/alumno", alumno);
// app.use("/admin", admin);
app.use(notFound)



app.listen(process.env.PORT || 3000, ()=> {
    console.log("server is running...");
});