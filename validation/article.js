const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateArticleInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10 })) {
    errors.text = "Text must be more than 10 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
