const Validator = require("validator");
const validText = require("./valid-text")

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';
   

    if (!Validator.isLength(data.text, {min: 1, max: 150})){
        errors.text = "Comments must be less than 150 characters";
        
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = "Comments may not be blank"
       
    }
   
    console.log(Object.keys(errors).length)
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}