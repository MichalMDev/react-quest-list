const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }, 
    category: {
        type: String,
        trim: true
    },
    creationDate: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task