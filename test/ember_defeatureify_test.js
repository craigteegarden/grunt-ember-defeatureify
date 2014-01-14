'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.emberDefeatureify = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  strip_debug_statements: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/strip_debug_statements.js');
    var expected = grunt.file.read('test/expected/strip_debug_statements_expected.js');
    test.equal(actual, expected, 'should strip multiline debug statements.');

    test.done();
  },
  strip_debug_statements_disabled: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/strip_debug_statements_disabled.js');
    var expected = grunt.file.read('test/expected/strip_debug_statements_disabled_expected.js');
    test.equal(actual, expected, 'should not strip debug statements when enableStripdebug===false.');

    test.done();
  }
};
