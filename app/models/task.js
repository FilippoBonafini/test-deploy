const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    data: {
        created: {
            type: Date,
            default: Date.now,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        expiration: {
            type: String,
        },
        description: {
            type: String,
        },
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;