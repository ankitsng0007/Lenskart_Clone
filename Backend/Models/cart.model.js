const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
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

const cartModel = mongoose.model("cart",cartSchema)

module.exports={ cartModel };