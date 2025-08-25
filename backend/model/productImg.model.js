import mongoose from "mongoose";

const productImgSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Donner", required: true },
    imageName:{type:String,required:true},
    contentType:{type:String,required:true},
    imageData:{type:Buffer,required:true},
})

const FileUpload=mongoose.model("FileUpload",productImgSchema)

export default FileUpload;