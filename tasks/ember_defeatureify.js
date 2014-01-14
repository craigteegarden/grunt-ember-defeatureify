/*
 * grunt-ember-defeatureify
 * https://github.com/craig/grunt-ember-defeatureify
 *
 * Copyright (c) 2014 Craig Teegarden
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('emberDefeatureify', 'Experimental. Remove specially flagged feature blocks and debug statements from Ember source using defeatureify.', function() {
    var options,
        config,
        content,
        sourceFile,
        destFile,
        defeatureify;

    options = this.options();
    
    defeatureify = require('defeatureify');

    sourceFile = this.files[0].src[0];
    destFile = this.files[0].dest;

    if (!options.features) {
      options.features = {};
    }

    config = {
      enabled: options.features,
      namespace: options.namespace,
      debugStatements: options.debugStatements,
      enableStripDebug: options.enableStripDebug
    };

    content = grunt.file.read(sourceFile);

    grunt.file.write(destFile, defeatureify(content, config));

  });

};
