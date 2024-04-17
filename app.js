const express=require("express");
const app=express();
const cors=require("cors");

const dotenv=require("dotenv");
dotenv.config(path="/env");
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
})
)
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", `${process.env.FRONTEND_URL}`),
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-with, Content-Type, Accept",
       
//     );
    
//     res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
   
//     next();
// });
app.use(express.json());
app.use(express.urlencoded());

const db=require("./config/db");
db();

const messageRouter=require('./Routes/userRoutes');
app.use('/api/v1/user',messageRouter);

module.exports=app;