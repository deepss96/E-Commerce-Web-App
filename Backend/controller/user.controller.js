import { response } from "express";
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const singup= async (req,res)=>{
    try {
        const{fullname,email,password}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User alrady exists"})
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
       await createdUser.save()
        res.status(201).json({message:"User Created Successfully" ,user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        },
    })
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal server error"})
    }
};

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login Successfully",user:{
                fullname:user.fullname,
                email:user.email,
                id:user.id
            }})

        }
    } catch (error) {
        console.log("Error:" +error.message);
        res.status(500).json({message:"Internal server error"})
    }
}