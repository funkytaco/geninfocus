/* Let's make the accounts-ui user available to the front end */
CurrentUserId = null;
Meteor.publish(null, function() {
    CurrentUserId = this.userId;
});

/* Publish the Mongo collection */
Meteor.publish("Children", function () {
    var currentUserId = this.userId;
    return Children.find({id: currentUserId });
});

/* Publish the Mongo collection */
Meteor.publish("Registration", function () {
    var currentUserId = this.userId;
    return Children.find({id: currentUserId });
});
