//Vendors
_ = require('underscore');
Backbone = require('backbone');
Marionette = require('backbone.marionette');
Marionette.$ = require('jquery');

var championList = require('./views/championList'),
    champions = require('./api/champions');

//ng-call
(new championList({
  collection: champions,
  el: ".link-area"
})).render();
