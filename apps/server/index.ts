import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import noteRoutes from './routes/notes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || 'Something went wrong!' });
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/noteapp';

// Debug check for connection string (masking credentials)
const maskedURI = MONGO_URI.replace(/:([^:@]+)@/, ':****@');
console.log(`Attempting to connect to MongoDB at:`);

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err: any) => console.error('MongoDB connection error:', err));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('MERN Notes App API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
