const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Location = require('../../models/Location');
const validateLocationInput = require("../../validation/locations");

router.get("/test", (request, response) => response.json({msg: "The Locations route is working"}));

router.get("/", (request, response) => {
    // console.log(request.query)
    // console.log("get locations")
    
    //+/- 0.16666 latitude is 10 miles
    //+/- 0.183333 long is 10 miles
    //request.query.rating
    //request.query.location
    //request.query.category
    //request.query.distance
    // let lowerBoundx = request.query.location.split(',')[0]
    let lowerBoundx = parseFloat(request.query.location.split(',')[0]) - (0.17*parseFloat(request.query.distance))
    
    let upperBoundx = parseFloat(request.query.location.split(',')[0]) + (0.17*parseFloat(request.query.distance))
   
    let lowerBoundy = parseFloat(request.query.location.split(',')[1]) - (0.18*parseFloat(request.query.distance))
    
    let upperBoundy = parseFloat(request.query.location.split(',')[1]) + (0.18*parseFloat(request.query.distance))

    // console.log(typeof lowerBoundx)
    // console.log(lowerBoundx)
    // console.log(upperBoundx)
    

    // Location.find({ "location.0": {$gte: lowerBoundx, $le: upperBoundx } })
    Location.find({ "location.0": {$lt: upperBoundx, $gt: lowerBoundx}, "location.1": {$lt: upperBoundy, $gt: lowerBoundy} })
        .sort({ date: -1})
        .then( chat => {
            console.log(chat)
            response.json(chat)})
        .catch(error => response.status(404).json({ nolocationsfound: 'No Locations yet'}));
});

router.get('/user/:user_id', (request, response) => {
    Location.find({author: request.params.user_id})
    .then(locations => response.json(locations))
    .catch(error => response.status(404).json({ noLocationsfound: "No Locations yet from user"}))
});
router.get('/location/:location_id', (request, response) => {
    Location.find({_id: request.params.location_id})
    .then(locations => response.json(locations))
    .catch(error => response.status(404).json({ noLocationsfound: "No Locations yet from user"}))
});

// router.get('/event/:event_id', (request, response) => {
//     Location.find({eventId: request.params.event_id})
//     .then(locations => response.json(locations))
//     .catch(error => response.status(404).json({ nolocationsfound: "No Locations yet from event"}))
// });

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const {errors, isValid} = validateLocationInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }

        const newLocation = new Location({
            id: request.body.id,
            tags: request.body.tags,
            author: request.user.id,
            title: request.body.title,
            location: request.body.location,
            description: request.body.description,
            info: request.body.info,
            totalRated: [0,0,0,0,0]
        });
        newLocation.save().then(location => response.json(location))
    })


module.exports = router;