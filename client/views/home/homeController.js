angular.module("myapp").controller("HomeCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){
      
    function enableDropdowns() {
        $('.ui.dropdown')
        .dropdown()
        ;
    }

    
    //$scope.page = 1;
    //$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    
    /*** $scope.someCollection = $meteor.collection(function() {
       return SomeCollection.find({}, {
        sort : $scope.getReactively('sort')
      });
    }); ***/

    $meteor.autorun($scope, function() {
      //$meteor.subscribe code here 
    });

    $scope.getUserById = function(userId){
     // return Meteor.users.findOne(userId);
    };

    $scope.creator = function(party){

    };

    enableDropdowns();

}]);