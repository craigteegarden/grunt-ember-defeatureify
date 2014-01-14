# grunt-ember-defeatureify

> Experimental. Remove specially flagged feature blocks and debug statements from Ember source.

This is a simple grunt plugin that exposes the functionality of the [`defeatureify`](https://github.com/thomasboyt/defeatureify) node package. `defeatureify` is used in the [`ember-dev`](https://github.com/emberjs/ember-dev) package to enable or remove features and strip debug statements during the [Ember.js](https://github.com/emberjs/ember.js) build process.

It allows grunt users to enable/disable features and strip debug statements from their applications during the grunt build process.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ember-defeatureify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ember-defeatureify');
```

## The "emberDefeatureify" task

### Overview
In your project's Gruntfile, add a section named `emberDefeatureify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  emberDefeatureify: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.features
Type: `Object`
Default value: `{}`

An object containing feature names to enable or disable. Features with a value `true` will be enabled, otherwise they will be removed from the source.

Example:

````javascript
  features: {
    "propertyBraceExpansion": true,
    "ember-metal-run-bind": true,
    "with-controller": true,
    "query-params-new": false,
    "string-humanize": false
  }
````

#### options.namespace
Type: `String`
Default value: `'Ember'`

The namespace to look for the features in.

#### options.debugStatements
Type: `Array`
Default value: `[]`

An array of strings containing debug statements to remove. Does not use `options.namespace`. For example:

````javascript
debugStatements: [
      "Ember.warn", 
      "Ember.assert", 
      "Ember.deprecate", 
      "Ember.debug", 
      "Ember.Logger.info"
      ]
````

#### options.enableStripDebug
Type: `Boolean`
Default value: `false`

Enables or disabled stripping the debug statements specified in `options.debugStatements`.

### Usage Examples

#### Stripping Debug Statements
In this example, the specified debug statements are stripped from `testing.js`. So if the `testing.js` file has the content 

```js
App.IndexRoute = Ember.Route.extend({
  model: function() {
    App.debugStatement( true || 
                        false,
                        "a multiline debug statement");

    return ['red', 'yellow', 'blue'];
  }
});
```

the generated result would be

```js
App.IndexRoute = Ember.Route.extend({
  model: function() {

    return ['red', 'yellow', 'blue'];
  }
});
```

Configuration:

```js
grunt.initConfig({
  emberDefeatureify: {
    options: {
      // task options
    },
    strip_debug: {
      options: {
        // target specific options to override task options
        debugStatements: ["App.debugStatement"],
        enableStripDebug: true
      },
      src: 'src/testing.js',
      dest: 'dest/output.js'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
