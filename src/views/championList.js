var championRow = require('./champion');

//ng-wrapper
module.exports = Marionette.CollectionView.extend({
  tagName: "ul",
  childView: championRow
});