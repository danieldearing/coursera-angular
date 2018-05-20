(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['categoryItems'];
function ItemDetailController(categoryItems) {
  var itemDetail = this;
  itemDetail.categoryItems = categoryItems["menu_items"];
  itemDetail.category = categoryItems["category"]

  for ( var i = 0; i < itemDetail.categoryItems.length; i++ ) {
  	var keys = [];

  	for ( var key in itemDetail.categoryItems[i] ) {
  		if ( itemDetail.categoryItems[i].hasOwnProperty(key) && itemDetail.categoryItems[i][key] ) {
  			keys.push(key);
  		}
  	}
  	itemDetail.categoryItems[i].keys = keys;
  }
}

})();
