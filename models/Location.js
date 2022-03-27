const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    location: { type: [Number],
                required: true},
    description: {
        type: String
    },
    tags: [String]
    ,
    totalRated: [],
    date: {
        type: Date,
        default: Date.now
    },
    info: {
        type: String
    }
})

const Location = mongoose.model('location', LocationSchema);
module.exports = Location