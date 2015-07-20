Children = new Mongo.Collection("children");

checkUser = function(userId, doc) {
    return true;
};

//todo add security checks
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}

//access the current user id via our global variable `currentUserId` in a method.
Meteor.methods({
  getMeteorUser: function(){
    var user = this.userId;
  }
});

Children.allow({
    insert: checkUser,
    update: checkUser,
    remove: checkUser
});
