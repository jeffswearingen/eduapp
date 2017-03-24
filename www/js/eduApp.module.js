// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('eduApp', [
    'ionic',

    'ui.bootstrap',
//    'interactjs',
//    'ngTouch',
    'mwl.calendar',
    'eduApp.login',
    'eduApp.contact',
    'eduApp.video', 
    'eduApp.audio',
    'eduApp.checkin',
    'eduApp.register',
    'eduApp.calendar',
    'eduApp.map'
  ])
  .config(eduAppConfig)
  .run(eduAppRun);

function eduAppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/features/home/home.html'
      })
     $urlRouterProvider.otherwise('/home');
}

function eduAppRun($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
