import React,{useState}from 'react'

function Login() {
    const [formData, setFormData] = useState({ email: '', password: ''});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=async (e)=>{
       e.preventDefault();
       try {
        const response =await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
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
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Enter Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor='password'>Enter Password</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} required />
            <button type='submit'>Login</button>
        </form>
        {error && <p style={{color: 'red'}}>Login failed. Please try again.</p>}
        {success && <p style={{color: 'green'}}>Login successful. You can now access your account.</p>}
    </div>
  )
}

export default Login