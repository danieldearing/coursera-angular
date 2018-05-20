(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	// Redirect to home page if no other URL matches
	$urlRouterProvider.otherwise('/');
	// *** Set up UI states ***
	$stateProvider

	// Home page
	.state('home', {
		url: '/',
		templateUrl: 'src/menuApp/templates/home.template.html'
	})

	// Premade list page
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menuApp/templates/main-menuapp.template.html',
		controller: 'MenuDataController as mainlist',
		resolve: {
			items: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})

	.state('items', {
	  url: '/items/{categoryShortName}',
	  templateUrl: 'src/menuApp/templates/main-items.template.html',
	  controller: "ItemDetailController as itemCtrl",
	  resolve: {
	  	categoryItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
	  		return MenuDataService.getItemsForCategories($stateParams.categoryShortName)
	  	}]
	  }
	});

}

})();
