import React, { useState } from "react";

function AddVehicle() {
  const [formData, setFormData] = useState({
    name: "",
    capacityKg: "",
    tyres: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/vehicle/add`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSuccess(true);
        setError(null);
        await response.json();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Add Vehicle
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">
              Enter Vehicle Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="capacityKg">
              Enter Vehicle Capacity (kg)
            </label>
            <input
              type="number"
              name="capacityKg"
              value={formData.capacityKg}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="tyres">
              Enter Number of Tyres
            </label>
            <input
              type="number"
              name="tyres"
              value={formData.tyres}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Add Vehicle
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4">
            Adding vehicle failed. Please try again.
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mt-4">
            Vehicle added successfully.
          </p>
        )}
      </div>
    </div>
  );
}

export default AddVehicle;
