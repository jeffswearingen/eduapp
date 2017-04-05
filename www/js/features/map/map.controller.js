angular
	.module('eduApp.map')
	.controller('MapCtrl', MapCtrl);

function MapCtrl($http, $scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

//    $ionicPlatform.ready(function() {
//        if(window.cordova && window.cordova.plugins.Keyboard) {
//        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//        // for form inputs)
//        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//                         
//        // Don't remove this line unless you know what you are doing. It stops the viewport
//        // from snapping when text inputs are focused. Ionic handles this internally for
//        // a much nicer keyboard experience.
//        cordova.plugins.Keyboard.disableScroll(true);
//        }
//        if(window.StatusBar) {
//                         StatusBar.styleDefault();
//        }
//                         
//        $cordovaGeolocation.getCurrentPosition().then(function (data) {
//        $http.get('https://maps.googleapis.com/maps/api/geocode/json',
//        {params: {latlng: data.coords.latitude + ',' + data.coords.longitude}})
//        .success(function (response) {
//            var location = {
//                lat: data.coords.latitude,
//                 lng: data.coords.longitude,
//                city: response.results[0].formatted_address,
//                current: true
//        };
//                 console.log(location);
//                 });
//    });
        
//	var vm = this;
////    vm.element = document.getElementById(geolocation);
////    console.log(element);
//    
//    var posOptions = {timeout: 10000, enableHighAccuracy: false};
//    $cordovaGeolocation
//    .getCurrentPosition(posOptions)
//    .then(function (position) {
//          var lat  = position.coords.latitude
//          var long = position.coords.longitude
//          }, function(err) {
//          // error
//          });
//    console.log(lat);
//    console.log(long);
//
//    
//    $cordovaGeolocation.getCurrentPosition().then(function (data) {
//        $http.get('https://maps.googleapis.com/maps/api/geocode/json',
//        {params: {latlng: data.coords.latitude + ',' + data.coords.longitude}})
//        .success(function (response) {
//        var location = {
//            lat: data.coords.latitude,
//            lng: data.coords.longitude,
//            city: response.results[0].formatted_address,
//            current: true
//            };
//        //Locations.data.unshift(location);
//                 console.log('map');
//                 console.log(location);
//                 vm.location = location;
//        });
//    });
//    google.maps.event.addDomListener(window, 'load', function() {
////        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
//// 
//        var mapOptions = {
//            center: (new google.maps.LatLng(location.lat, location.lng)),
//            zoom: 16,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
////
//        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// 
//        navigator.geolocation.getCurrentPosition(function(pos) {
//            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//            var myLocation = new google.maps.Marker({
//                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//                map: map,
//                title: "My Location"
//            });
//        });
////
//        $scope.map = map;
//    });

}

