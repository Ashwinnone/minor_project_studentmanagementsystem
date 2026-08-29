const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        rollNumber: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        phone: {
            type: String
        },

        age: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);