var interpreter = require('../../lib/interpreter');

describe('Interpreter', function() {
  describe('Parse basics', function() {
    it('should parse digit requirement' function(done) {
      var digit = interpreter.interpret('d');
      if (typeof digit === int) {
        done();
      } else {
        throw new Error('Obviously didn\'t work');
      }
    });

  });
});
