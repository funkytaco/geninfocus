angular.module("myapp").controller("RegistrationCtrl", ['$scope', '$meteor', '$rootScope', '$state',
    function($scope, $meteor, $rootScope, $state){

        $scope.$meteorSubscribe('Children');
        $scope.children = $meteor.collection(Children);

        this.children =  $scope.children;

        /** Semantic UI Javascript - see docs **/
        function enableDropdowns() {
        $('.ui.dropdown')
            .dropdown();
        }
        enableDropdowns();

    }]);
