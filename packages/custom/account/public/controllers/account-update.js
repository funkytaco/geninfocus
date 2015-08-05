'use strict';

/* jshint -W098 */
angular.module('mean.account').controller('AccountUpdateController', ['$scope', 'Global', 'Account',
  function($scope, Global, Account) {
    $scope.global = Global;

    var vm = this;
    vm.main = Account.getAccount();

    console.log("account: ", vm.account);
  }
]);
