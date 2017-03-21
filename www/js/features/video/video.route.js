angular
	.module('eduApp.video')
	.config(videoConfig);

function videoConfig($stateProvider) {
	$stateProvider.state({
		name: 'video',
		url: '/video',
		templateUrl: 'js/features/video/video.html',
		controller: 'VideoCtrl',
		controllerAs: 'VideoVM'
	});
}