var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var itemTemplate = require('./item-template.hbs');

Marionette.$ = require('jquery');

if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

//Item de ng-repeat
var SingleLink = Marionette.ItemView.extend({
  tagName: "li",
  template: itemTemplate
});

//Div que contiene ng-repeat
var ListView = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: SingleLink
});

//Variable que popula ng-repeat
var list = new Backbone.Collection([
  {path: 'http://google.com'},
  {path: 'http://mojotech.com'},
]);

//Call de ng-repeat
(new ListView({
  collection: list,
  el: '.link-area'
})).render();
