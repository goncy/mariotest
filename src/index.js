//Vendors
window._ = require('underscore');
window.Backbone = require('backbone');
window.Marionette = require('backbone.marionette');
window.Marionette.$ = require('jquery');

var ChampionPage = require('./views/championPage'),
  champions = require('./api/champions');

var app = new Marionette.Application();

var ChampionsCtrl = Marionette.Object.extend({
  initialize: function () {
    console.log("Arranca ctrl");
  },
  homePage: function () {
    console.log("Arranca home");
  },
  championList: function () {
    console.log('Arranca list');
    (new ChampionPage({
      el: "body",
      collection: champions
    })).render();
  },
  idChampionList: function (id) {
    console.log('ID: ' + id);
  }
});

var Router = Marionette.AppRouter.extend({
  appRoutes: {
    "": "homePage",
    "list": "championList",
    "list/:champ": "idChampionList"
  },
  controller: new ChampionsCtrl()
});

app.on('start', function () {
  app.router = new Router();
  Backbone.history.start();
  console.log("Arranca");
});

app.start();
