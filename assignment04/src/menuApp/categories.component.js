(function () {
'use strict';

angular.module('Data')
.component('menuCategories', {
  templateUrl: 'src/menuApp/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
