const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

require("./db/conn");
const Register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
 const temp_path = path.join(__dirname, "../templates/views");

 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

 app.use(express.static(static_path));
 app.set("view engine", "hbs");
 app.set("views", temp_path);

app.get("/",(req,res)=>{
    res.render("index");
});

 app.post("/index", async(req, res) =>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const registerStudent = new Register({
                name : req.body.name,
                email : req.body.email,
                gender : req.body.gender,
                mobile : req.body.mobile,
                cgpa : req.body.cgpa,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            });

            const  registered = await registerStudent.save();
            console.log("successfull");
            res.send("Thank you for filling this form");
           
        }else{
            res.send("Password are not matching..... please try again");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});