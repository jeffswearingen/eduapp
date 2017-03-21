angular
	.module('eduApp.audio')
	.controller('AudioCtrl', AudioCtrl);

function AudioCtrl() {
	return {
		restrict: 'E',
		templateUrl: 'js/features/audio/audio.html',
		controller: 'AudioCtrl',
		controllerAs: 'AudioVM'
	}
}