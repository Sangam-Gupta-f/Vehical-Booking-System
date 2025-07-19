import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.js';
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port=process.env.PORT || 8080;

app.get('/', (req,res)=>{
    res.send('Welcome to the server!');
})

// Connect to MongoDB
connectDB();   


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
