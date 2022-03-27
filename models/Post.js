const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    location: {
        type: String
    },
    postphoto: {
        type: String
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            },
            commentphoto: {
                type: [String]
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('post', PostSchema);
module.exports = Post