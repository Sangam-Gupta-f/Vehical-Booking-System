import React,{useState}from 'react'

function Register() {
    const [formData, setFormData] = useState({name: '',    email: '', password: ''});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=async (e)=>{
       e.preventDefault();
       try {
        const response =await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
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
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter User Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor='email'>Enter Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor='password'>Enter Password</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} required />
            <button type='submit'>Register</button>
        </form>
        {error && <p style={{color: 'red'}}>Registration failed. Please try again.</p>}
        {success && <p style={{color: 'green'}}>Registration successful. You can now log in.</p>}
    </div>
  )
}

export default Register