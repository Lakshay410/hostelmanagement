const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://SudheerData:Sudheer123@cluster0.78uwc.mongodb.net/RahulData?retryWrites=true&w=majority').then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})