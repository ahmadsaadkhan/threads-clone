import mongoose from 'mongoose'
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URI) return console.log('Mongo DB Uri not found.')
    if(isConnected) return console.log('Already Connected to Mongo DB.');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.log(error);
    }
}
