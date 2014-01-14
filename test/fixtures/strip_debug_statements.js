// test source file
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    App.debugStatement( true || 
                        false,
                        "a multiline debug statement");

    return ['red', 'yellow', 'blue'];
  }
});