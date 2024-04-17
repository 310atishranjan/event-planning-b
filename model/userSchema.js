const mongoose=require("mongoose");
const validator=require("validator");

const mongooseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"valid email is required"],
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const user=mongoose.model("user",mongooseSchema);
module.exports=user;