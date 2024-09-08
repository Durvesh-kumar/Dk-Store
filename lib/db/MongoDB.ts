import mongoose from 'mongoose';


let isConnected : boolean = false;

export const connectToDB = async(): Promise<void> => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('mongoose already connected');
        return
    }

    try {
        await mongoose.connect(`${process.env.MONGODB_URL}` || "", {
            dbName: process.env.MOGODB_DBNAME
        })

        isConnected = true;
        console.log("mongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}