const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Comment = require('../../models/Comment');
const validateCommentInput = require("../../validation/comments");

router.get("/test", (request, response) => response.json({msg: "The comments route is working"}));

router.get("/", (request, response) => {
    Comment.find()
        .sort({ date: -1})
        .then( chat => response.json(chat))
        .catch(error => response.status(404).json({ nocommentsfound: 'No comments yet'}));
});

router.get('/user/:user_id', (request, response) => {
    Comment.find({user: request.params.user_id})
    .then(comments => response.json(comments))
    .catch(error => response.status(404).json({ nocommentsfound: "No comments yet from user"}))
});
router.get('/location/:location_id', (request, response) => {
    Comment.find({location: request.params.location_id})
    .then(comments => response.json(comments))
    .catch(error => response.status(404).json({ nocommentsfound: "No comments yet from user"}))
});

// router.get('/event/:event_id', (request, response) => {
//     Comment.find({eventId: request.params.event_id})
//     .then(comments => response.json(comments))
//     .catch(error => response.status(404).json({ nocommentsfound: "No comments yet from event"}))
// });

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const {errors, isValid} = validateCommentInput(request.body);

        if (!isValid) {
            return response.status(410).json(errors);
        }

        const newComment = new Comment({
            
            text: request.body.text,
            author: request.user.id,
            locationId: request.body.locationId,
            rating: request.body.rating,
            dateVisited: request.body.dateVisited
        });
        newComment.save().then(Comment => response.json(Comment))
    })

router.put('/:id',
    passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const {errors, isValid} = validateCommentInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }
        Comment.findByIdAndUpdate(request.params.id, request.body)
        .then(Comment => response.json(Comment))
        .catch(error => response.json(error))
    })


module.exports = router;