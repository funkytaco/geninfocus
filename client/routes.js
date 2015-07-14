angular.module("myapp").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
    }
  });
}]);

angular.module("myapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    /***
    We use AngularJS routing to serve pages. Right now only the following URI's
    have a "web page":

        * /home

    NOTE: Create a directory in `client` for each page. i.e. client/home.

    ***/

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'client/home/home.ng.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise("/home");
  }]);
