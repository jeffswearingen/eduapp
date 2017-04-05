angular
	.module('eduApp.map')
	.config(mapConfig);

function mapConfig($stateProvider) {
	$stateProvider.state({
		name: 'map',
		url: '/map',
		templateUrl: 'js/features/map/map.html',
		controller: 'MapCtrl',
		controllerAs: 'MapVM'
	});
}
