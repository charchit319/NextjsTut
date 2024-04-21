import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log('mongoose connected successfullly');
        })

        connection.on('error',(err)=>{
            console.log("Error while connecting to db");
            process.exit();
        })
    }catch(error){
        console.log("Smtg is wrong");
        console.log(error);
    }
}