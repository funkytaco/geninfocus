'use strict';

angular.module('mean.children').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('children example page', {
      url: '/children/example',
      templateUrl: 'children/views/index.html'
    });
  }
]);
