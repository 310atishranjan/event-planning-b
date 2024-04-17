const mongoose=require("mongoose");

// const dotenv=require("dotenv");
// dotenv.config();

const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected with database");
    }catch(error){
        console.log(error);
    }
}
module.exports=db;