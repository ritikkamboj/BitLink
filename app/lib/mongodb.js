// lib/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) { // Check if already connected
            await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB Connected...');
        }
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
    }
};

export default connectDB;