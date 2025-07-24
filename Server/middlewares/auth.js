import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from 'dotenv';
dotenv.config();
const authMiddleware = async(req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Missing Token" });
    }
    const token=req.headers.authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user=await User.findById(decoded.id).select("-password");
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default authMiddleware;

