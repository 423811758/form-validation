var util = require('../util');
var ValidationError = require('../error');
var messages = require('../messages');

/**
 *  Helper for creating validation errors.
 *
 *  If a rule has a message property it takes
 *  precedence.
 *
 *  @param rule The validation rule.
 *  @param message A custom messaage for the error.
 *  @param ... Replacement parameters passed to util.format.
 */
var error = function (rule, message) {
  var msg = rule.message || message || util.format(messages.default, rule.field);
  if (arguments.length > 2) {
    var args = Array.prototype.slice.call(arguments, 1);
    msg = util.format.apply(null, args);
  }
  var err = new ValidationError(msg);
  err.field = rule.field;
  return err;
};

module.exports = error;
