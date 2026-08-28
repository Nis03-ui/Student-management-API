
import express from "express";

import {
    createStudent,
    getAllStudent,
    getStudent,
    updateStudent,
    deleteStudent
} from "../controller/student.controller.js";

const router = express.Router();

router.post("/createStudent", createStudent);

router.get("/getAllStudent", getAllStudent);

router.get("/getStudent/:id", getStudent);

router.patch("/updateStudent/:id", updateStudent);

router.delete("/deleteStudent/:id", deleteStudent);

export default router;
