angular
	.module('eduApp.contact')
	.config(contactConfig);

function contactConfig($stateProvider) {
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		templateUrl: 'js/features/contact/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'ContactVM'
	});
}