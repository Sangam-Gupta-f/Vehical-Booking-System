import React from 'react'

function AvailableVehicle({data, impData}) {
    const user= JSON.parse(localStorage.getItem('user'));
    const handleBooking= async (vehicle, impData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/booking/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ vehicleId: vehicle._id, userId: user._id, fromPincode: impData.fromPincode, toPincode: impData.toPincode, startDate: impData.startDate })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h1>Available Vehicle For You</h1>
        <div>
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>    
                            <th>Vehicle Name</th>
                            <th>Capacity (kg)</th>
                            <th>Tyres</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.capacity}</td>
                            <td>{vehicle.tyres}</td>
                            <td>
                                <button onClick={() => handleBooking(vehicle, impData)}>Book</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No vehicles available</p>
            )}
        </div>
    </div>
  )
}

export default AvailableVehicle