const express = require("express");




const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Wellcome Homepage")
})



app.listen(8080,()=>{
    console.log("Running at port-8080")
})