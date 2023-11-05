const express = require("express");
// const cors = require("cors");
const mysql = require("mysql");
const db = require('./config/database');
const cors = require('./middleware/cors');



const app = express();
app.use(cors);
app.use(express.json());

app.get("/", (req,res) => {
    res.json("Hello from backend");
})

app.post('/login', (req,res,next)=>{
    const sql = "SELECT * FROM usuarios WHERE `usuarioID` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) {
            return res.json("Error");
        } if (data.length > 0){
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })

})

app.listen(process.env.PORT || 8081, ()=>{
    console.log("Server is running...")
});