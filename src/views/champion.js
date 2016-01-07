var championRow = require('../templates/champion-row.hbs');

//ng-item
module.exports = Marionette.ItemView.extend({
  tagName: "li",
  template: championRow
});