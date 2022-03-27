const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    identifier:{
        type: String,
        index: true

    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    friend_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String
        // enums: [
        //     "0", //'add friend'
        //     "1", //'requested'
        //     "2", // 'pending'
        //     "3", // 'friends'
        //     "4", // 'blocked'
        //     "5" // 'follow
        // ]
    },
    follow: {
        default: false
    }
})

const Friend = mongoose.model('friend', FriendSchema);
module.exports = Friend