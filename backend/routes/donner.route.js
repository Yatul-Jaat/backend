import express from 'express';
import { addDonnerProduct, approvedDonner, deleteDonnerProduct, getAllDonner, getDonnerById, getRequestsByUserId, pendingDonner, updateDonnerProduct } from '../controller/donner.controller.js';
import multer from 'multer';

const upload=multer({storage:multer.memoryStorage()});

const donnerRouter=express.Router();


donnerRouter.get("/pending",pendingDonner)// all pending donner ka data
donnerRouter.get("/approved",approvedDonner)// all aproved donner ka data
donnerRouter.get("/all",getAllDonner)// all donner ka data
donnerRouter.post("/byId",getDonnerById)// donner ka khud ki request ka data
donnerRouter.post("/product",getRequestsByUserId)// particluar product ka data
donnerRouter.post("/create",upload.single("file"),addDonnerProduct)// donner apni side se product add krta hai
donnerRouter.delete("/delete",deleteDonnerProduct)// admin ke side se delete krna hai
donnerRouter.put("/update",updateDonnerProduct)// admin ki side se approve krna hai
export default donnerRouter;