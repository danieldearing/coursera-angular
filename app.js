(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
	$scope.name = "";
	$scope.message = "";
	

	var setMessage = function (itemsList) {
		if ( itemsList.length <= 3 ) {
			$scope.message = "Enjoy!";
		} else if ( itemsList.length > 3 ) {
			$scope.message = "Too Much!";
		} else {
			$scope.message = "Please enter data first";
		};
	};
	
	$scope.CheckLunch = function () {
		if ( $scope.name === "" ) {
			$scope.message = "Please enter data first";
			return
		}
		var items = $scope.name.split(',');
		var itemsList = [];
		for ( var i = 0; i < items.length; i++ ) {
			if ( items[i] !== " " && items[i] !== "" ) {
				itemsList.push(items[i]);
			};
		};

		setMessage(itemsList);
	};	
 };

})();
