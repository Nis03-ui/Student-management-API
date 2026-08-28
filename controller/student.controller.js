
import prisma from "../config/db.js";

export const createStudent = async (req, res) => {
    try {
        const { Name, Class_s } = req.body;

        if (!Name || !Class_s) {
            return res.status(400).json({
                success: false,
                message: "Invalid Name or class"
            });
        }

        const student = await prisma.students.create({
            data: {
                Name,
                Class_s
            }
        });

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            student
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


export const getAllStudent = async (req, res) => {
    try {
        const students = await prisma.students.findMany();

        return res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            students
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


export const getStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await prisma.students.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student retrieved successfully",
            student
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedStudent = await prisma.students.update({
            where: {
                id: Number(id)
            },
            data: req.body
        });

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            updatedStudent
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await prisma.students.delete({
            where: {
                id: Number(id)
            }
        });

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            deletedStudent
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
