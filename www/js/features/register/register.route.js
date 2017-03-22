angular
	.module('eduApp.register')
	.config(registerConfig);

function registerConfig($stateProvider) {
	$stateProvider.state({
		name: 'register',
		url: '/register',
		templateUrl: 'js/features/register/register.html',
		controller: 'RegisterCtrl',
		controllerAs: 'RegisterVM'
	});
}