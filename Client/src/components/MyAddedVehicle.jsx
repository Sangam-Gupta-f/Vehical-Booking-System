import React from 'react'

function MyAddedVehicle() {
  const [vehicles, setVehicles] = React.useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vehicle/get-vehicle?id=${user._id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      });
      const data = await response.json();
      console.log(data.vehicle);
      setVehicles(data.vehicle);
    };
    fetchVehicles();
  }, []);

  return (
    <div className='Card w-xl flex flex-col rounded-lg p-3 m-4 bg-[#101828] text-white'>
      <h1 className='text-2xl font-bold'>My Added Vehicles</h1>
      {/* Add your vehicle list or management components here */}
      <table className='min-w-full table-auto border-collapse border border-gray-200 shadow-sm rounded-lg'>
        <thead>
          <tr>
            <td>Vehicle Name</td>
            <td>Capacity KG</td>
            <td>Tyres</td>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle)=>(
          <tr key={vehicle._id}>
            <td>{vehicle.name}</td>
            <td>{vehicle.capacityKg}</td>
            <td>{vehicle.tyres}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyAddedVehicle