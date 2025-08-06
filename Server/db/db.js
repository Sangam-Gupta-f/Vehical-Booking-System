import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://sangamg7318:Ramramram%40@sangambabu.64k1w.mongodb.net/vehicalBooking');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
