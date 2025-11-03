import mongoose from "mongoose";

export async function connectDB() {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI!}/synopsis`)

        console.log('mongodb connected successfully at host : ', db.connection.host)
    } catch (error) {
        console.log('error while connecting to mongodb : ', error)
        process.exit(1)
    }
}
