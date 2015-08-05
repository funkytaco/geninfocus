'use strict';

angular.module('mean.account').factory('Account', ['MeanUser',
  function(MeanUser) {

    console.log("meanuser ", MeanUser, MeanUser.user.name);

  var fakeAccount = {
    user: MeanUser.user.name,
    email: MeanUser.user.email,
    phone: "777-222-333",
    address: [{
      street: "123 Elm Street",
      city: "Atlanta",
      state: "Georgia",
      zip: "30168"
    }]
  };

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
      getAccount: function(){
        return fakeAccount;
      },
      editAccount: function(){

      },
      getChildren: function(){
        return fakeChildren;
      }
    };

  }
]);
