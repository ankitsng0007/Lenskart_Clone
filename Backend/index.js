const express = require("express");
const {connection} = require("./Configs/db");
const { userRouter } = require("./Routes/user.route");
const { cartRouter } = require("./Routes/cart.route");
const { productRouter } = require("./Routes/product.route");
require("dotenv").config();
const cors = require("cors");


const app = express();

app.use(cors({
    origin : "*",
}))

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Wellcome Homepage")
})

app.use("/user",userRouter);
//app.use("/product", productRouter)
app.use("/cart", cartRouter);
//app.use("/product", productRouter);


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