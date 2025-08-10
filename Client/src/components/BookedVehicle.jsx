import React, { useState, useEffect } from 'react'

function BookedVehicle() {
    const [bookedVehicles, setBookedVehicles] = useState([]);
    const user =JSON.parse(localStorage.getItem('user'));

    useEffect( ()=>{
       const fetchBookedVehicles =async function () {
     const res= await fetch(`${import.meta.env.VITE_API_URL}/api/booking/getbooking?id=${user._id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
     })
     const data=await res.json();
     console.log(data.data);
     setBookedVehicles(data.data);
    }
    fetchBookedVehicles();
    },[])
  return (
    <div className="Card w-xl flex flex-col rounded-lg p-3 m-4 bg-[#101828] text-white shadow-lg">
  <h1 className="text-xl font-bold border-b border-gray-700 pb-2 mb-3">Booked Vehicles</h1>
  <div className="flex flex-col gap-4">
    {bookedVehicles.map(vehicle => (
      <div
        key={vehicle._id}
        className="p-4 rounded-md bg-[#1E293B] hover:bg-[#334155] transition-colors duration-200"
      >
        <p className="text-sm text-gray-300">FROM Pincode: <span className="font-semibold text-white">{vehicle.fromPincode}</span></p>
        <p className="text-sm text-gray-300">TO Pincode: <span className="font-semibold text-white">{vehicle.toPincode}</span></p>
        <p className="text-sm text-gray-300">START DATE: <span className="font-semibold text-white">{vehicle.startDate}</span></p>
        <p className="text-sm text-gray-300">END DATE: <span className="font-semibold text-white">{vehicle.endDate}</span></p>
      </div>
    ))}
  </div>
</div>

  )
}

export default BookedVehicle