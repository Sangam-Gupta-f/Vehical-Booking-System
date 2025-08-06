import {User} from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
//console.log(process.env.JWT_SECRET)
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.find({email});
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const login=async(req,res)=>{
    const {email, password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'});
        }
        else{
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
            return res.status(200).json({token, message: 'Login successful' , user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

const profile=async(req,res)=>{
    const {id}=req.body;
    console.log(id);
    try {
        const user=await User.findById(id).select("-password");
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        return res.status(200).json({message:"user fetch successfully", user});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Getting User data failed , Server error' });
    }
}

export {register,login, profile};