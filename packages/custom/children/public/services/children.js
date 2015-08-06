'use strict';

angular.module('mean.children').factory('Children', [
  function() {

    var fakeChildren = [{
      name: "Carol Jane",
      age: "10",
      sex: "female", //1,2
      birthDate: "3/12/2005",
      address: []
    },{
      name: "Billy Kidd",
      age: "12",
      sex: "male", //1,2
      birthDate: "12/06/2001",
      address: []
    }];

    return {
      getChildren: function(){
        return fakeChildren;
      }
    };
  }
]);
