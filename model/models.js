//Functions
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

/************  Mongo Models ************/

/* Children */
Children = new Mongo.Collection("children");
Children.allow({
    insert: checkUser,
    update: ownsDocument,
    remove: ownsDocument
});


/* Registration */
Registration = new Mongo.Collection("registration");


Registration.attachSchema(new SimpleSchema({

    childName: {
            type: String,
            label: "Child's Name",
            optional: true,
            max: 200
     },
    programName: {
            type: String,
            allowedValues: ['Program One', 'Program Two', 'Program Three', 'NOT LISTED (Use field below)'],
            optional: false
     },

     programNameManualEntry: {
         type: String,
         label: "Program Name (If Not Listed)",
         optional: true,
         max: 200
      },

     entranceDate: {
        type: Date,
        label: "Entrance Date",
        optional: false
     },
     withdrawalDate: {
        type: Date,
        label: "Withdrawal Date",
        optional: true
     },
     signature: {
        type: String,
        label: "Parent / Guardian Signature",
        max: 200
      }
}));

Registration.allow({
  insert: checkUser,
  update: ownsDocument,
  remove: ownsDocument
});
