angular
	.module('eduApp.audio')
	.controller('AudioCtrl', AudioCtrl);

function AudioCtrl($scope, $cordovaMedia, $ionicLoading) {
	var vm = this;
    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        media.play();
    }
    
    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }

}




                   
