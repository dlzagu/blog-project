import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes/index.js";

// Middleware
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/api", routes.authRouter);

// Database
import "./config/db.js";

// server listening
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
