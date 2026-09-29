/*import "dotenv/config";
import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

mongoose
    .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });
    */
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();