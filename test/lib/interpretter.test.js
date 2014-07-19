var Interpreter = require('../../lib/interpreter');
var interpreter = new Interpreter;

describe('Interpreter', function() {
  describe('Parse basics', function() {
    it('should parse digit requirement', function(done) {
      var digit = interpreter.interpret('{{d}}');
      if (digit === '1') {
        done();
      } else {
        throw new Error('Obviously didn\'t work');
      }
    });

  });
});
