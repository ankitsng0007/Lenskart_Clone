const express = require("express");
const {productModel} = require("../Models/product.model");


const productRouter = express.Router();

productRouter.use(express.json());



productRouter.get("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const product = await productModel.findById({_id: id});
        if(product){
            res.json({
                success: true,
                product: product
            });
        }
    }catch(err){
        console.log({err: err});
        res.send({success: false, err: err});
    }
});