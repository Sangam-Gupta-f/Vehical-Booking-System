import mongoose from "mongoose";
const vehicleSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name:{
        type: String,
        required: true
    },
    capacityKg:{
        type: Number,
        required: true
    },
    tyres:{
        type: Number,
        required: true
    }
},{timestamps:true});
export const Vehicle=mongoose.model('Vehicle',vehicleSchema);