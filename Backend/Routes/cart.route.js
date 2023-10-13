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



module.exports = {cartRouter};