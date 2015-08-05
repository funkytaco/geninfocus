'use strict';

angular.module('mean.account').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('account', {
      url: '/account',
      templateUrl: 'account/views/index.html'
    })
    .state('account update', {
      url: '/account/update',
      controller: 'AccountUpdateController',
      controllerAs: 'accUpdate',
      templateUrl: 'account/views/update.html'
    })
    // todo trying to figure out how to load partials
    .state('account.main', {
      url: '/account',
      views: {
          'account-main@account': 'account/views/_account.html'
      }
    });


  }
]);
