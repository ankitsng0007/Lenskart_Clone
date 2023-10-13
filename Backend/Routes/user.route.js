const express = require("express");
const {userModel} = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userRouter = express.Router();

userRouter.get("/", async(req,res)=>{
    let query = req.query;
    try{
        const users = await userModel.find(query);
        res.send(users);
    }catch(err){
        console.log(err);
        res.send({"err" : "Something went wrong"})
    }
});

userRouter.post("/register", async(req,res)=>{
    const {first_name,last_name,email,password,mobile} = req.body;
    try{
        bcrypt.hash(password, 5, async(err,secure_password)=>{
            if(err){
                console.log(err)
            }else {
                const user = new userModel({
                    first_name,
                    last_name,
                    email, mobile,
                    password:secure_password
                })
                await user.save();
                res.send("Registered")
            }
        });
    }catch(err){
        res.send("Error in Registering the User")
        console.log(err)
    }
});

userRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.find({ email });
        const hashed_password = user[0].password;
        if(user.length > 0){
            bcrypt.compare(password, hashed_password, (err, result)=>{
                if(result){
                    const token = jwt.sign({userID: user[0]._id}, "masai");
                    res.send({msg: "Login Successful", token: token});
                }else{
                    res.send("Wrong Credentials");
                }
            });
        }else{
            res.send("Please Register First");
        }
    }catch(err){
        res.send("Something Went Wrong");
        console.log(err);
    }
});

module.exports = { userRouter };