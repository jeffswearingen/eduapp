angular
	.module('eduApp.map')
	.controller('MapCtrl', MapCtrl);

function MapCtrl($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

	var vm = this;
    
    $cordovaGeolocation.getCurrentPosition().then(function (data) {
        $http.get('https://maps.googleapis.com/maps/api/geocode/json',
        {params: {latlng: data.coords.latitude + ',' + data.coords.longitude}})
        .success(function (response) {
        var location = {
            lat: data.coords.latitude,
            lng: data.coords.longitude,
            city: response.results[0].formatted_address,
            current: true
            };
        //Locations.data.unshift(location);
                 console.log('map');
                 console.log(location);
                 vm.location = location;
        });
    });
//    google.maps.event.addDomListener(window, 'load', function() {
//        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
// 
//        var mapOptions = {
//            center: myLatlng,
//            zoom: 16,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
// 
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
// 
//        $scope.map = map;
//    });
	
}

