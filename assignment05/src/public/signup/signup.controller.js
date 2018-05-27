(function() {
"user strict";

angular.module('public')
.controller('SignupFormController', SignupFormController)

SignupFormController.$inject = ["MenuService", "InfoService"];
function SignupFormController(MenuService, InfoService) {
	var formCtrl = this;
	var info = {
		'firstname': '',
		'lastname': '',
		'email': '',
		'phone': '',
		'favourite': {}
	}

	formCtrl.error = false;
	formCtrl.saved = false;

	formCtrl.submit = function() {
		formCtrl.error = false;
		info.firstname = formCtrl.firstname;
		info.lastname = formCtrl.lastname;
		info.email = formCtrl.email;
		info.phone = formCtrl.phone;
		
		promise = formCtrl.getFavourite(formCtrl.favourite)
		promise.then(function(response) {
			info.favourite = response
			save()
		}, function(error) {
			formCtrl.error = true
		})
	}

	function save() {
		InfoService.setInfo(info);
		formCtrl.saved = true
	}

	formCtrl.getFavourite = function(shortName) {
		return MenuService.getItem(shortName);
	}

}


})();