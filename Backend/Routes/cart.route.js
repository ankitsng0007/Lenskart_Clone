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

cartRouter.patch("/:id", async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
    try{
        const cart = await cartModel.findByIdAndUpdate({_id : id}, payload);
        res.send({
            success:true,
            msg : "Successfully Updated The Cart Item",
            carts : cart
        });
        await cart.save();
    }catch(err){
        console.log({err : err, msg: "Error in Cart Update"});
        res.send({ success: false, msg : "Error in cart update" , err : err});
    }
});

cartRouter.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        await cartModel.findByIdAndDelete({_id : id});
        res.json({status:200, message: "Deleted The Cart Item"});
    }catch(err){
        console.log("err :",err);
        res.send({msg : err});
    }
});

module.exports = {cartRouter};