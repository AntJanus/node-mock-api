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
      var clue = match.substr(2, match.length - 2);
      clue = this.evaluateClue(clue);
      clueString = this.replaceVal(clueString, match, clue);
    });

    return clueString;
  },

  //poor man's sprintf

  replaceVals: function(str, replacements) {
    while(str.indexOf('%s') > 0) {
      str = this.replaceVal(str, '%s', replacements;
    }

    return replaceVals;
  },

  replaceVal: function(target, match, replacement) {
    var begin = target.indexOf(match);
    var end = begin + match.length;

    var start = target.slice(0, begin);
    var finish = target.slice(end);

    return start + replacement + finish;
  },

};



module.exports = interpreter;
