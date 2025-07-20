import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.js';
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/vehicle', vehicleRoutes);
const port=process.env.PORT || 8080;

app.get('/', (req,res)=>{
    res.send('Welcome to the server!');
})

// Connect to MongoDB
connectDB();   


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
