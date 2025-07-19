import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vehicalId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehical',
        required: true
    },
    fromPincode:{
        type: String,
        required: true
    },
    toPincode:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true  
    }
}, {timestamps:true});
export const Booking = mongoose.model('Booking', bookingSchema);