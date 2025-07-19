import mongoose from "mongoose";

const vehicalSchema=new mongoose.Schema({
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
export const Vehical=mongoose.model('Vehical',vehicalSchema);