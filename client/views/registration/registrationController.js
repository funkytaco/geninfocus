angular.module("myapp").controller("RegistrationCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){



      $scope.$meteorSubscribe('Children');
      $scope.children = $meteor.collection(Children);


    function enableDropdowns() {
        $('.ui.dropdown')
        .dropdown()
        ;
    }


    enableDropdowns();

}]);
