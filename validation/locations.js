const Validator = require("validator");
const validText = require("./valid-text")

module.exports = function validateLocationInput(data) {
    let errors = {};

    
    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, {min: 1, max: 50})){
        errors.title = "Locations must be less than 50 characters";
    }

    
    if (Validator.isEmpty(data.author)) {
        errors.author = "Please sign in before creating a new location"
    }
    if (Validator.isEmpty(data.title)) {
        errors.title = "Please name your location"
    }
    if (data.location.length === 0) {
        errors.location = "Please locate your spot on the map"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}