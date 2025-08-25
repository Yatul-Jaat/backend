import mongoose from "mongoose";

export const connectingTODB=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/auth_jwt")
    console.log("connected to db")
}