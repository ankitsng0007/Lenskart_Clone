const express = require("express");
const {connection} = require("./Configs/db");
const { userRouter } = require("./Routes/user.route");
require("dotenv").config();




const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Wellcome Homepage")
})

app.use("/user",userRouter);


app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("Trouble in connectiong to db");
        console.log(err);
    }
    console.log(`Running at port-${process.env.port}`)
})