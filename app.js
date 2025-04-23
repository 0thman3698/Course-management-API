import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DB.js';
import courseRouter from './routes/courseRoutes.js'

dotenv.config();
connectDB()

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
      <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1 style="color: #4CAF50;">👋 Welcome to the Course Management API</h1>
        <p>Use <code>/api/v1/courses</code> to access the available endpoints.</p>
      </div>
    `);
  });
  
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

