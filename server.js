import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import incidentRoutes from './routes/incident.route.js';
import connectDB from './database/connect.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use('/api/incidents', incidentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Incident Management API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server is running on port", PORT);
    connectDB();
});