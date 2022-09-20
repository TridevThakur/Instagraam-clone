
const express=require('express');
const app=express();

const mongoose=require('mongoose');
const PORT=4000;

const {MONGODB_URI} = require('./config');



mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected',()=>{
    console.log("connected successfully");
});

mongoose.connection.on('error',(error)=>{
    console.log("Something Wrong!!",error);
});



require('./models/user_model');
require('./models/post_model');
app.use(express.json());
app.use(require('./models/routes/authentication'));
app.use(require('./models/routes/postRoute'));


app.listen(PORT,() => {
    console.log("SERVER STARTED ON PORT NO.4000");
});
