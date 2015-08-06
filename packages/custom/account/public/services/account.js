'use strict';

angular.module('mean.account').factory('Account', ['MeanUser', 'Children',
  function(MeanUser, Children) {

    console.log("meanuser ", MeanUser, MeanUser.user.name);
    /**
    Account should depend on the following services:
      * Children
      * Contacts
      * Addresses
    **/

  var fakeAccount = {
    user: MeanUser.user.name,
    email: MeanUser.user.email,
    children: Children.getChildren(),
    //contacts: Contacts.getContacts(),
    //addresses: Addresses.getAddresses()
  };



  var fakeAccountOld = {
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



    return {
      getAccount: function(){
        return fakeAccount;
      },
      editAccount: function(){

      },
      getChildren: function(){
        return fakeAccount.children;
      }
    };

  }
]);
