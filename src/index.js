//Vendors
_ = require('underscore');
Backbone = require('backbone');
Marionette = require('backbone.marionette');
Marionette.$ = require('jquery');

var championPage = require('./views/championPage'),
    champions = require('./api/champions');

//ng-call
var chp = new championPage({
  el: "body",
  collection: champions
});

chp.render();