const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating Schema
const UserSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:string
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('Users', UserSchema);