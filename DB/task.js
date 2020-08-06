const mongoose = require('./index')
taskSchema = new mongoose.Schema({
    title: String,
    priority: Number,
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    Date: {
        type: Date,
        default: Date.now
    }
})
task = mongoose.model("Task", taskSchema)

module.exports = task