import React,{useState}from 'react'

function AddVehicle() {
    const [formData, setFormData] = useState({name: '',    capacityKg: '', tyres: ''});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=async (e)=>{
       e.preventDefault();
       try {
        const response =await fetch(`${import.meta.env.VITE_API_URL}/api/vehicle/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'                          
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            setSuccess(true);
            setError(null);
            const data=await response.json();
          } else {
            setError(true);
          }
       } catch (error) {
        setError(true);
        console.log(error);
       }
    }
  return (
    <div>
        <h1>Add Vehicle</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter Vehicle Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor='capacityKg'>Enter Vehicle Capacity (kg)</label>
            <input type="number" name='capacityKg' value={formData.capacityKg} onChange={handleChange} required />
            <label htmlFor='tyres'>Enter Number of Tyres</label>
            <input type="number" name='tyres' value={formData.tyres} onChange={handleChange} required />
            <button type='submit'>Add Vehicle</button>
        </form>
        {error && <p style={{color: 'red'}}>Adding vehicle failed. Please try again.</p>}
        {success && <p style={{color: 'green'}}>Vehicle added successfully.</p>}
    </div>
  )
}

export default AddVehicle