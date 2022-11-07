import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URL;

mongoose.connect(
  `${URI}`,

  (err) => {
    if (err) throw err;
    console.log("Mongodb connection");
  }
);
