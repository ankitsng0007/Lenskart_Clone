const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image_src: String,
    productRefLinc: String,
    rating: Number,
    color: String,
    price : Number,
    mprice: Number,
    name: String,
    shape: String,
    gender: String,
    style: String,
    dimension:String,
    productType: String,
    productId : String,
    userRated: Number,
    quality: Number,
    id: Number
});

const productModel = mongoose.model("product",productSchema)

module.exports={ productModel };