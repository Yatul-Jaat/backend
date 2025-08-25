import express from "express"
import cookieParser from "cookie-parser";
import Cors from "cors"

import {router as signUpRouter} from "./routes/Signup.route.js"
import { connectingTODB } from "./db/db.js";
import donnerRouter from "./routes/donner.route.js";
import protectRoute from "./middleware/middleware.js";
import receiverRouter from "./routes/receiver.route.js";

const app =express();

app.use(express.json());
app.use(Cors())
app.use(cookieParser());

app.use("/auth",signUpRouter);
app.use("/donner",protectRoute,donnerRouter);
app.use("/receiver",protectRoute,receiverRouter)



app.listen(3000,()=>{
    console.log("connected to server");
    connectingTODB();
})