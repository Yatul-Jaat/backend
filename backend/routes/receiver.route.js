import express from "express";
import { addRequest, approvedRequests, deleteRequest, getRequestData, pendingRequests, requestsByUserId, updateRequest } from "../controller/receiver.controller.js";

const receiverRouter = express.Router();

receiverRouter.post("/create",addRequest);// receiver apni side se request add krta hai
receiverRouter.put("/update",updateRequest);// admin ki side se approve krna hai
receiverRouter.delete("/delete",deleteRequest);// admin ke side se delete krna hai
receiverRouter.get("/pending",pendingRequests);// all pending receiver ka data
receiverRouter.get("/approved",approvedRequests);// all aproved receiver ka data
receiverRouter.get("/myRequests",requestsByUserId);// receiver ka khud ki request ka data
receiverRouter.post("/requestData",getRequestData);// particular request ka data

export default receiverRouter;

