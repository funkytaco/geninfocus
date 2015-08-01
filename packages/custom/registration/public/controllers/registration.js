'use strict';

/* jshint -W098 */
angular.module('mean.registration').controller('RegistrationController', ['$scope', 'Global', 'MeanUser', 'Registration',
  function($scope, Global, MeanUser, Registration) {

    // Global Vars
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

    // Form Values
    vm.account = {
      guardianFirstname: "BT"
    };

    // Todo: Add form validation

    // Todo: Create Reg functionality
    vm.registerAccount = function(){
      console.log("registering account");
    };


  }
]);
