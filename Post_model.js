const mongoose=require('mongoose');
const protectedResource = require('../middleware/protectedResource');
const router = require('./routes/postRoute');
const {ObjectId}=mongoose.Schema.Types;
const postSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true

        },
        likes:[
            {
                type:ObjectId,
                ref:"UserModel"
            }
        ],
        author:{
            type:ObjectId,
            ref:"UserModel"

        }
    });
    
    mongoose.model("PostModel", postSchema);
