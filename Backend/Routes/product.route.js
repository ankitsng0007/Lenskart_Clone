const express = require("express");
const {productModel} = require("../Models/product.model");


const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", (req,res)=>{
    const query = {};
    let data = productModel.find();
    if(req.query.rating){
        query.rating = req.query.rating;
    }
    if(req.query.color){
        query.color = {$regex: req.query.color};
    }
    if(req.query.price){
        query.price = req.query.price;
    }
    if(req.query.mprice){
        query.mprice = req.query.mprice;
    }
    if(req.query.shape){
        query.shape = req.query.shape;
    }
    if(req.query.gender){
        query.gender = req.query.gender;
    }
    if(req.query.style){
        query.style = req.query.style;
    }
    if(req.query.dimension){
        query.diamension = req.query.diamension;
    }
    if(req.query.productType){
        query.productType = req.query.productType;
    }
    if(req.query.userRated){
        query.userRated = req.query.userRated ;
    }
    if(req.query.search){
        query.name = { $regex: req.query.search, $options:"i"}
    }
    if(req.query.productRefLink){
        query.productRefLink = { $regex: req.query.productRefLink, $options:"i"}
    }
    data.find(query, (error, prod)=>{
        if(error){
            res.send(error);
        }else{
            res.send(prod);
        }
    })
    .sort({price: req.query.sort === "lowtohigh" ? 1 : -1})
    .skip(parseInt(req.query.page) * 12)
    .limit(12);
});

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

module.exports = {productRouter}