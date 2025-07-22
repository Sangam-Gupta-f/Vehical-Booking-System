import React from "react";

function AvailableVehicle({ data, impData }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleBooking = async (vehicle, impData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/booking/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vehicleId: vehicle._id,
            userId: user._id,
            fromPincode: impData.fromPincode,
            toPincode: impData.toPincode,
            startDate: impData.startDate,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      alert("Vehicle booked successfully!");
    } catch (error) {
      console.log(error);
      alert("Booking failed, please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Available Vehicles For You
      </h1>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((vehicle) => (
            <div
              key={vehicle._id}
              className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition"
            >
              {/* Vehicle Info */}
              <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
              <p className="text-gray-300">
                <span className="font-medium text-white">Capacity:</span>{" "}
                {vehicle.capacityKg} kg
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Tyres:</span>{" "}
                {vehicle.tyres}
              </p>

              {/* Book Button */}
              <button
                onClick={() => handleBooking(vehicle, impData)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-4">
          No vehicles available at the moment.
        </p>
      )}
    </div>
  );
}

export default AvailableVehicle;
