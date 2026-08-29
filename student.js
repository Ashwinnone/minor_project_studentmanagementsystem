const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    studentId: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model(
    "Student",
    studentSchema
);