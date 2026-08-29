const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();


// ===============================
// Middleware
// ===============================

app.use(cors());

app.use(express.json());


// ===============================
// Routes
// ===============================

app.use("/api/students", studentRoutes);


// ===============================
// Test Route
// ===============================

app.get("/", (req, res) => {
    res.send("Student Management System API is running");
});


// ===============================
// MongoDB Connection
// ===============================

mongoose.connect("mongodb://127.0.0.1:27017/student_management")

    .then(() => {

        console.log("MongoDB connected successfully");

        app.listen(5000, () => {

            console.log(
                "Server running on http://localhost:5000"
            );

        });

    })

    .catch((error) => {

        console.log("MongoDB connection failed:");

        console.log(error);

    });