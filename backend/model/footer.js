const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    workingHours: {  // Updated field
        type: String,
        required: true
    },
    facebookLink: {
        type: String,
        required: true
    },
    instagramLink: {
        type: String,
        required: true
    },
    twitterLink: {
        type: String,
        required: true
    },
   
   
   
});

module.exports = mongoose.model('Footer', footerSchema);
