(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);

MenuDataController.$inject = ['items'];
function MenuDataController(items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
