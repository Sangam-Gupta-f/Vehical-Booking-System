import { Booking } from "../models/Booking.js";
import {Vehicle}  from "../models/Vehicle.js";
const createBooking = async (req, res) => {
    const { userId, vehicleId, fromPincode, toPincode, startDate} = req.body;
    const startDateObj = new Date(startDate);
    const estimatedRideDurationHours =
      Math.abs(parseInt(toPincode) - parseInt(fromPincode)) % 24;

    const endDate = new Date(
      startDateObj.getTime() + estimatedRideDurationHours * 60 * 60 * 1000
    );
    try {
        const isAvailable = await Vehicle.findById({_id:vehicleId});
        if (!isAvailable) {
            return res.status(400).json({ message: 'Vehicle not found' });
        }
        const booking = new Booking({
            userId, vehicleId, fromPincode,toPincode, startDate,endDate:endDate
        });
        await booking.save();
        return res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

const getBooking=async (req, res)=>{
    const {id}=req.body;
    try {
        const data=await Booking.find({userId:id});
        return res.status(200).json({message:'Booking fetch successfully' , data});
    } catch (error) {
        return res.status(500).json({message:'Getting User data failed , Server error'},error);
    }
}
export { createBooking , getBooking};