var dictionary = require('dictionary');
var _ = require('lodash');
var S = require('string');

var interpreter = function() {

  return this;
};

interpreter.prototype = {
  dictionary = {

  },

  interpret: function(clueString) {
    return this.evaluateParts(this.getParts(clueString));
  },

  evaluateClue: function(clue) {
    if(clue === 'd') {
      return 1;
    } else if (clue === 'str') {
      return 'Hello';
    } else if (clue === 'name') {
      return 'Antonin';
    }
  },

  parseHandlebars: function(clueString) {
    var r = /\{\{(.+?)\}\}/g;
    var r2 = /\{\{(.+?)\}\}/;
    var matches = clueString.match(r) || [];

    matches.forEach(function(match) {
      this.evaluateClue(match);
    });

    return replaceVals(clueString.replace(r, '|%s|'), matches);

  },

  replaceVals: function(str, replacements) {
    var splits = str.split('|');

    splits.forEach(function(key, value) {
      if (value == '%s') {
        splits[key] = replacements[0];
        replacements.shift();
      }
    }

    return splits.join();
  }
};



module.exports = interpreter;
