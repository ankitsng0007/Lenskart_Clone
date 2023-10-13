const express = require("express");
const { cartModel} = require("../Models/cart.model");

const cartRouter = express.Router();

cartRouter.get("/", async(req,res)=>{
    let query = req.query;
    try{
        const carts = await cartModel.find(query);
        res.send(carts);
    }catch(err){
        console.log(err);
        res.send({ err : "Something Went Wrong"}); 
    }
});

cartRouter.post("/", async(req,res)=>{
    const payload = req.body;
    try{
        const new_cart = new cartModel(payload);
        await new_cart.save();
        res.send("New Cart Item Added");
    }catch(err){
        console.log(err);
        res.send({msg : "Something Went Wrong"});
    }
});



module.exports = {cartRouter};