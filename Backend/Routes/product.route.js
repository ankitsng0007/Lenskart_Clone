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

productRouter.post("/", async(req,res)=>{
    const payload = req.body;
    try{
        const newProduct = new productModel(payload)
        await newProduct.save();
        res.json({newProduct, message:"New Product Successfully Added"});
    }catch(err){
        console.log("err : ", err);
        res.send({msg: err});
    }
});

productRouter.post("/many", async(req,res)=>{
    const payload = req.body;
    try{
        newProduct = await new productModel.insertMany(payload);
        res.send(newProduct)
    }catch(err){
        console.log("err :",err)
        res.send({msg : err})
    }
});

productRouter.patch("/:id", async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
    try{
        const product = await productModel.findByIdAndUpdate({_id:id}, payload);
        res.send({
            success: true,
            msg: "Successfully Updated Product",
            products: product,
        })
        await product.save();
    }catch(err){
        console.log({err: err, msg: "Error in Update Product"});
        res.send({success: false, msg: "Error In Update Product"})
    }
});

productRouter.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        await productModel.findByIdAndDelete({_id: id});
        res.json({ status:200 , message: "Deleted The Product"});
    }catch(err){
        console.log("err :", err);
        res.send({msg :err});
    }
});

module.product = {
    productRouter
}