import './App.css'
import { Routes, Route } from'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register' 
import Login from './pages/Login'
import AddVehicle from './pages/AddVehicle'
import CheckVehicle from './pages/CheckVehicle' 
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/check-vehicle" element={<CheckVehicle />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
