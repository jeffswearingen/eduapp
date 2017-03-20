angular
	.module('eduApp.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($state) {
	var vm = this;

	vm.login = function() {
	console.log(vm);

	$state.go('home');
		
	}
}