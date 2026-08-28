
import dotenv from "dotenv";
dotenv.config();

import express from "express";

import studentAPI from "./routes/student.routes.js";

const app = express();

app.use(express.json());

app.use("/student/api", studentAPI);

export default app;

