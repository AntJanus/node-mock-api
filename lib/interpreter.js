var dictionary = require('./dictionary');
var _ = require('lodash');

var interpreter = function() {

  return this;
};

interpreter.prototype = {
  dictionary: {

  },

  interpret: function(clueString) {
    return this.parseHandlebars(clueString);
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
    var self = this;
    var r = /\{\{(.+?)\}\}/g;
    var r2 = /\{\{(.+?)\}\}/;
    var matches = clueString.match(r) || [];

    matches.forEach(function(match) {
      var clue = match.substring(2, match.length - 2);
      clue = self.evaluateClue(clue);
      clueString = self.replaceVal(clueString, match, clue);
    });

    return clueString;
  },

  //poor man's sprintf
  replaceVals: function(str, replacements) {
    while(str.indexOf('%s') > 0 && replacements.length > 0) {
      str = this.replaceVal(str, '%s', replacements[0]);
      replacements.shift();
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
