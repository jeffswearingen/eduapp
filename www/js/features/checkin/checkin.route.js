angular
	.module('eduApp.checkin')
	.config(checkinConfig);

function checkinConfig($stateProvider) {
	$stateProvider.state({
		name: 'checkin',
		url: '/checkin',
		templateUrl: 'js/features/checkin/checkin.html',
		controller: 'CheckinCtrl',
		controllerAs: 'CheckinVM'
	});
}