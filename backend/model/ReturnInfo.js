const mongoose = require('mongoose');

const returnInfoSchema = new mongoose.Schema({
    heading: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        
    },
    list: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('ReturnInfo', returnInfoSchema);
