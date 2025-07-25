import React, { useState } from "react";
import AvailableVehicle from "../components/AvailableVehicle";

function CheckVehicle() {
  const [formData, setFormData] = useState({
    capacityRequired: "",
    startDate: "",
    fromPincode: "",
    toPincode: "",
  });
  const [listvehicle, setListVehicle] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams({
        capacityRequired: formData.capacityRequired,
        fromPincode: formData.fromPincode,
        toPincode: formData.toPincode,
        startTime: formData.startDate,
      }).toString();

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/vehicle/available?${queryParams}`,
        { method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.vehicles);
      setListVehicle([...data.vehicles] || []);
      setError(null);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      {/* Check Vehicle Form */}
      <section className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Check Vehicle</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Capacity Required"
            value={formData.capacityRequired}
            name="capacityRequired"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="datetime-local"
            placeholder="Start Date"
            value={formData.startDate}
            name="startDate"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="From Pincode"
            value={formData.fromPincode}
            name="fromPincode"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="To Pincode"
            value={formData.toPincode}
            name="toPincode"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Check Vehicle
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </section>

      {/* Available Vehicles Section */}
      {listvehicle.length > 0 && (
        <section className="w-full max-w-5xl mt-10">
          <AvailableVehicle data={listvehicle} impData={formData} />
        </section>
      )}
    </div>
  );
}

export default CheckVehicle;
