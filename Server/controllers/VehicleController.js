import  {Vehicle}  from "../models/Vehicle.js";
import { Booking } from "../models/Booking.js";
const addVehicle = async (req, res) => {
    const {userId, name, capacityKg, tyres} = req.body;
    try{
        const vehicle = new Vehicle({ userId, name, capacityKg, tyres });
        await vehicle.save();
       return res.status(201).json({ message: 'Vehicle added successfully', vehicle });
    }catch(error){
        console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
}

const available = async (req, res) => {
  try {

    const { capacityRequired, fromPincode, toPincode, startTime } = req.query;

    const requiredCapacity = parseInt(capacityRequired);
    const rideStartTime = new Date(startTime);

    const estimatedRideDurationHours =
      Math.abs(parseInt(toPincode) - parseInt(fromPincode)) % 24;

    const rideEndTime = new Date(
      rideStartTime.getTime() + estimatedRideDurationHours * 60 * 60 * 1000
    );

    // available vehicles
    const vehicles = await Vehicle.find({
      capacityKg: { $gte: requiredCapacity },
      _id: {
        $nin: await Booking.find({
          startDate: { $lt: rideEndTime },
          endDate: { $gt: rideStartTime }
        }).distinct("vehicleId")
      }
    });

    return res.status(200).json({
      message: "Available vehicles fetched successfully",
      vehicles,
      estimatedRideDurationHours
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getVehicle = async (req, res) => {
  const { id } = req.body;
  try{
     const vehicle=await Vehicle.find({userId:id});
     if(!vehicle){
       return res.status(404).json({ message: 'Vehicle not found' });
     }
     return res.status(200).json({ message: 'Vehicle fetched successfully', vehicle });
  }
  catch(error){
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}


export { addVehicle, available, getVehicle };