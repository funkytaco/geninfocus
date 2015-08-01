'use strict';

angular.module('mean.registration').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('registration index', {
      url: '/registration',
      templateUrl: 'registration/views/index.html'
    });
    $stateProvider.state('registration nouser', {
      url: '/registration',
      templateUrl: 'registration/views/index.html'
    });
  }
]);
