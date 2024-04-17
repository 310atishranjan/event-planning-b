const app=require("./app");

app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`);
})
