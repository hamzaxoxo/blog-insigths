import mongoose from 'mongoose';

let isConnected = false;

export async function connect() {
    console.log('Already connected to MongoDB');

    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!);
        isConnected = true;

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        });

    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }
}
