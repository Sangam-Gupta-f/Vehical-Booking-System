import React, { useState } from 'react'
import AvailableVehicle from '../components/AvailableVehicle';

function CheckVehicle() {
    const [formData, setFormData] = useState({ capacityRequired: '',startDate: '',fromPincode: '',toPincode: '' });
    const [listvehicle, setListVehicle]= useState([]);
    const [error, setError] = useState(null);
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams({
        capacityRequired: formData.capacityRequired,
        fromPincode: formData.fromPincode,
        toPincode: formData.toPincode,
        startTime: formData.startDate
      }).toString();

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/vehicle/available?${queryParams}`,
        { method: 'GET' } 
      );
            const data = await response.json();
            console.log(data.vehicles);
            // Handle the response data as needed
            setListVehicle([...data.vehicles] || []);
           } catch (error) {
            setError(true);
            console.log(error);
           }
    }

  return (
    <div>
        <section>
        <h1>Check Vehicle</h1>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder='Capacity Required' value={formData.capacityRequired} name='capacityRequired' required onChange={handleChange} />
            <input type="date" placeholder='Start Date' value={formData.startDate} name='startDate' required onChange={handleChange} />
            <input type="text" placeholder='From Pincode' value={formData.fromPincode} name='fromPincode' required onChange={handleChange} />
            <input type="text" placeholder='To Pincode' value={formData.toPincode} name='toPincode' required onChange={handleChange} />
            <button type='submit'>Check Vehicle</button>
        </form>
        </section>
        {listvehicle.length > 0 && <section>
            <AvailableVehicle data={listvehicle} impData={formData} />
        </section>}
    </div>
  )
}

export default CheckVehicle