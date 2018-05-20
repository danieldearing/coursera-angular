(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);

MenuDataController.$inject = ['MenuDataService', 'items'];
function MenuDataController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
