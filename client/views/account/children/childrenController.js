angular.module("myapp").controller("AccountChildrenCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){

    $scope.newChild = {"show":"", "gender":""};

    $scope.$meteorSubscribe('Children');
    $scope.children = $meteor.collection(Children);

    $scope.showAllergyField = function(child, value) {
        child.show.allergyField = value;
    };
    $scope.deleteAllergy = function() {
        if ($scope.newChild.attributes) {
            delete $scope.newChild.attributes['allergies'];
        }
        $scope.newChild.show.allergyField = 0;
    };

    $scope.deleteNote = function() {
        if (delete $scope.newChild.notes) {
            delete $scope.newChild.notes;
        }
        $scope.newChild.show.notesField = 0;
    };

    $scope.checkNull = function(value) {
        console.log('value', value);
        if (value !== 'undefined') return true;
    };

    $scope.addChild = function(child) {
    var userId = $rootScope.currentUser._id || false;
        if (userId) {
            child.id = userId;
            $scope.children.push(child);
        }
    };

    $scope.removeChild = function(child){
        $scope.children.splice( $scope.children.indexOf(child), 1 );
    };

    $scope.removeAll = function(){
        $scope.children.remove();
    };

    function enableDropdowns() {
        $('.ui.dropdown')
            .dropdown();
    };

    function enableCheckboxes() {
        $( ".ui.checkbox" )
            .checkbox();
    };

    function enableRadioButtons() {
        $('.ui.checkbox.radio')
            .checkbox();
    }


    enableDropdowns();
    enableCheckboxes();
    enableRadioButtons();

}]);
