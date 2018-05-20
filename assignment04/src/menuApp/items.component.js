(function () {
'use strict';

angular.module('Data')
.component('menuItems', {
  templateUrl: 'src/menuApp/templates/item-detail.template.html',
  bindings: {
    categoryItems: '<'
  }
});

})();
