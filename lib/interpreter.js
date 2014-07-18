var dictionary = require('dictionary');

var interpreter = function() {

  return this;
};

interpreter.prototype = {
  dictionary = {

  },

  interpret: function(clueString) {
    return this.evaluateParts(this.getParts(clueString));
  },

  getParts: function(clueString) {
  },
};



module.exports = interpreter;
