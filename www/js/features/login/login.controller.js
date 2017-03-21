angular
	.module('eduApp.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl() {
	return {
		restrict: 'E',
		templateUrl: 'js/features/login/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'LoginVM'
	}
}