angular.module("myapp").controller("RegistrationCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){

    function enableDropdowns() {
        $('.ui.dropdown')
        .dropdown()
        ;
    }

    $meteor.autorun($scope, function() {
      //$meteor.subscribe code here
    });

    $scope.getUserById = function(){
     // return Meteor.users.findOne(this._id);
    };

    $scope.creator = function(party){

    };

    enableDropdowns();

}]);
