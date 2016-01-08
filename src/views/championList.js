var championListTemplate = require('../templates/championList.hbs');
var championRow = require('./champion');

module.exports = Marionette.CompositeView.extend({
  template: championListTemplate,
  childView: championRow,
  childViewContainer: "#childContainer",
  tagName: "table",
  className: "table table-striped table-hover table-bordered"
});