const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    locationId: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number
    },
    dateVisited: {
        type: Date
    }
})

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment