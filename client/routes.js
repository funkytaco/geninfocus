/* redirect account logout to /home */
angular.module("myapp").run(["$rootScope", "$location", function($rootScope, $location) {

    $rootScope.$on("sessionLogout", function(event, next, previous, error) {
        console.log('session logout');
    });



  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page

    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
    }
  });


  $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
      //console.log('event', event);
  });


}]);

angular.module("myapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    /***
    We use AngularJS routing to serve pages. Right now only the following URI's
    have a "web page":

        * /home
        * /registration

    NOTE: Create a directory in `client` for each page. i.e. client/home. See
    the code below for more details.

    ***/

    /* AngularJS stateProvider - see Angular docs */
    $stateProvider

        /* /home URI */
        .state('home', {
        url: '/home',
        templateUrl: 'client/views/home/home.ng.html',
        controller: 'HomeCtrl',
        controllerAs: 'home' //mimics the URI
        })

        /* CRUD a child to the logged in user account - Create/Read */
        .state('accountChildren', {
            url: '/account/children',
            templateUrl: 'client/views/account/children/children.ng.html',
            controller: 'AccountChildrenCtrl',
            controllerAs: 'accountChildren' //mimics the URI
        })

        /* /registration URI CRUD - Create */
        .state('registration', {
            url: '/registration',
            templateUrl: 'client/views/registration/registration.ng.html',
            controller: 'RegistrationCtrl',
            controllerAs: 'registration' //mimics the URI
        }); //do not add states below this one.

        /* catchall for URLs which don't exist */
        $urlRouterProvider.otherwise("/home");

  }]);
