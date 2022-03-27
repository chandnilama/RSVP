const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Friend = require('../../models/Friend');
const validateFriendInput = require("../../validation/friends");

router.get("/test", (request, response) => response.json({msg: "The friends route is working"}));

router.get("/", (request, response) => {
    Friend.find()
        .sort({ date: -1})
        .then( chat => response.json(chat))
        .catch(error => response.status(404).json({ nofriendsfound: 'No friends yet'}));
});

router.get('/user/:user_id', (request, response) => {
    Friend.find({user: request.params.user_id})
    .populate('friend_id', '-password')
    .then(friends => response.json(friends))
    .catch(error => response.status(404).json({ nofriendsfound: "No friends yet from user"}))

    
});

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const {errors, isValid} = validateFriendInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }
        const newFriendRequested = new Friend({
            friend_id: request.body.userId,
            user_id: request.body.friendId,
            identifier: request.body.userId + request.body.friendId,
            status: request.body.status ? "5" :"2"
        });
        newFriendRequested.save()

        const newFriendRequest = new Friend({
            user_id: request.body.userId,
            friend_id: request.body.friendId,
            identifier: request.body.friendId + request.body.userId,
            status: request.body.status ? "0":"1"
        });
        newFriendRequest.save().then(Friend => response.json(Friend))
    })

router.patch('/user/:identifier',
    passport.authenticate('jwt', {session: false}),
    async (request, response) => {
        
        const userId = request.body.userId
        const friendshipdId = request.body.friendshipId
        const userStatus = request.body.userStatus
        const friendStatus = request.body.friendStatus
        const {errors, isValid} = validateFriendInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }
        const userUpdate = {status: userStatus};
        const friendUpdate = {status: friendStatus};
        
        let user = await Friend.findById(friendshipdId)
        await user.updateOne(userUpdate)
        
        
        let friendId = user.friend_id
       
        const filter = { identifier: userId + friendId.valueOf()};

        let test = await Friend.findOne(filter)
       

        let friend = await Friend.findOneAndUpdate(filter, friendUpdate,{returnOriginal: false}
        )
     


    })


module.exports = router;

