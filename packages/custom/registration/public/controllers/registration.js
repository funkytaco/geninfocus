'use strict';

/* jshint -W098 */
angular.module('mean.registration').controller('RegistrationController', ['$scope', 'Global', 'MeanUser', 'Registration',
  function($scope, Global, MeanUser, Registration) {
    $scope.global = Global;
    $scope.package = {
      name: 'registration'
    };

    //$scope.test = 'Testing 123';
    var vm = this;

    vm.registrationVars = {
      authenticated: MeanUser.loggedin,
      user: MeanUser.user,
      isAdmin: MeanUser.isAdmin
    };


  }
]);
