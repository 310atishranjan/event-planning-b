const usermodel=require("../model/userSchema");

const messageController=async(req,res)=>{
    try{
    const {email,phone,name,message}=req.body;
    if(!email||!phone||!name||!message){
        return res.status(400).json({
            message:"Provide all details",
            success:false
        })
    }
    const newMessage= new usermodel(req.body);
    newMessage.save();
    return res.status(200).json({
        message:"message save successful",
        success:true
    })
}catch(error){
    return res.status(500).json({
        message:"error in message",
        success:false
    })
}
}
module.exports=messageController;