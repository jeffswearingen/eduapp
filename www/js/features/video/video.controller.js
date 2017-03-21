angular
	.module('eduApp.video')
	.controller('VideoCtrl', VideoCtrl);

function VideoCtrl() {
	return {
		restrict: 'E',
		templateUrl: 'js/features/video/video.html',
		controller: 'VideoCtrl',
		controllerAs: 'VideoVM'
	}
}