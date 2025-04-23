import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DB.js';
import courseRouter from './routes/courseRoutes.js'

dotenv.config();
connectDB()

const app = express();

app.use(express.json())

app.use('/api/v1/courses', courseRouter)

app.use((req, res, next) => {
    res.status(404).json({
      status: 'fail',
      message: 'Route not found'
    });
  });
  
const port = process.env.Port || 3000

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})

