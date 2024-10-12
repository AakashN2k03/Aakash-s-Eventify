const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
   
    
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const FeedbackModel = mongoose.model('feedback', FeedbackSchema);

module.exports = FeedbackModel;
