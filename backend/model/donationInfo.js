import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    donnner:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    receiver:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    quantity:{type:Number,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Donner",required:true},
    date:{type:Date,default:Date.now},
})

const DonationInfo = mongoose.model("DonationInfo", donationSchema);

export default DonationInfo
