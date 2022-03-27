const Validator = require("validator");
const validText = require("./valid-text")

module.exports = function validatePostInput(data) {
    let errors = {};

    // data.text = validText(data.text) ? data.text : '';
   

    // if (!Validator.isLength(data.text, {min: 1, max: 150})){
    //     errors.text = "Friends must be less than 150 characters";
    // }

    // if (Validator.isEmpty(data.text)) {
    //     errors.text = "Friends may not be blank"
    // }
   

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}