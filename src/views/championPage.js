var championPageTemplate = require('../templates/championPage.hbs');
var championList = require('./championList');

module.exports = Marionette.LayoutView.extend({
  template: championPageTemplate,
  regions: {
    weak: "#lista-weak",
    strong: "#lista-strong"
  },
  onRender: function(){
    this.showChildView('weak', new championList({collection: this.collection}));
    this.showChildView('strong', new championList({collection: this.collection}));
  }
});