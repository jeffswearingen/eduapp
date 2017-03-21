angular
	.module('eduApp.audio')
	.config(audioConfig);

function audioConfig($stateProvider) {
	$stateProvider.state({
		name: 'audio',
		url: '/audio',
		templateUrl: 'js/features/audio/audio.html',
		controller: 'AudioCtrl',
		controllerAs: 'AudioVM'
	});
}