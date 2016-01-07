//Vendors
var Backbone,Marionette,_;

//Templates
var itemTemplate;

//Req vendors
_ = require('underscore');
Backbone = require('backbone');
Marionette = require('backbone.marionette');
Marionette.$ = require('jquery');

//Req templates
itemTemplate = require('./item-template');

//ng-item
var item = Marionette.ItemView.extend({
  tagName: "li",
  template: itemTemplate
});

//ng-wrapper
var list = Marionette.CollectionView.extend({
  tagName: "ul",
  childView: item
});

//ng-data
var listCollection = new Backbone.Collection([
  {path: "www.etermax.com"},
  {path: "www.preguntados.com"}
]);

//ng-call
(new list({
  collection: listCollection,
  el: ".link-area"
})).render();