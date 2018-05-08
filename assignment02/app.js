(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var toBuyList = this;

	toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

	toBuyList.isEmpty = function () {
		if ( toBuyList.items.length < 1 ) {
			return true;
		}
		else {
			return false;
		}
	}

	toBuyList.buyItem = function (itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
	}

 };

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var alreadyBoughtList = this;
	
	alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
 	alreadyBoughtList.isEmpty = function () {
 		if ( alreadyBoughtList.items.length < 1 ) {
 			return true;
 		}
 		else {
 			return false;
 		}
 	}
 };

 function ShoppingListCheckOffService() {
 	var service = this;

 	var toBuyItems = [{name:"Cookies",quantity:"5"},
 		{name:"Chips", quantity:"2"},
 		{name:"Chickens", quantity:"7"},
 		{name:"Pies", quantity:"3"},
 		{name:"Juice", quantity:"1"}];
 	
 	var alreadyBoughtItems = [];


 	service.buyItem = function (itemIndex) {
 		alreadyBoughtItems.push(toBuyItems[itemIndex]);
 		toBuyItems.splice(itemIndex, 1);
 	}

 	service.getToBuyItems = function () {
		return toBuyItems;
 	}

 	service.getAlreadyBoughtItems = function () {
 		return alreadyBoughtItems;
 	}
 }

})();
