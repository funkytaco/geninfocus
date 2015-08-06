'use strict';

/* jshint -W098 */
angular.module('mean.registration').controller('RegistrationController', ['$scope', 'Global', 'MeanUser', 'Registration',
  function($scope, Global, MeanUser, Registration) {

    // Global Vars
    $scope.global = Global;
    $scope.package = {
      name: 'registration'
    };
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
    vm.create = function(isValid) {
      if (isValid) {
        console.log("registering account");

        // $scope.article.permissions.push('test test');
        var article = new Articles($scope.article);

        article.$save(function(response) {
          $location.path('articles/' + response._id);
        });

        $scope.article = {};

      } else {
        console.log("not registering account");

        $scope.submitted = true;
      }
    };


  }
]);
