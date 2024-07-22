const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],

    },
    isDone: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
const Task = mongoose.model("Task", taskSchema)

module.exports = Task;