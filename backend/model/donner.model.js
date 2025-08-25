import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name:{type:String,required:true},
    description:{type:String,required:true},
    state:{type:String,required:true,enum:["approved","pending","deleted"]},
    //tag:{type:[String],default:[]},
    location:{type:String,required:true},
    date:{type:Date,default:Date.now},
});

const Donner = mongoose.model("Donner", productSchema);

export default Donner;