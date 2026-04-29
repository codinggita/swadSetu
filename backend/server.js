import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Connect to database
// Note: We'll catch and log errors but won't crash if MongoDB isn't running locally yet
connectDB().catch(err => {
    console.log("Could not connect to MongoDB initially. Starting server anyway...");
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/users', userRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('SwadSetu API is running...');
});

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
