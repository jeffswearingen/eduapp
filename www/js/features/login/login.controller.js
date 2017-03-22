angular
	.module('eduApp.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($state, $http) {

	var vm = this;

	vm.userInfoCreate = function() {
		var userInfo = {
			emailAddress : this.loginInfo.emailAddress,
			password     : this.loginInfo.password
		};
		return userInfo;
	};

	vm.login = function() {
		console.log('call login function');
		var loginUserInformation = vm.userInfoCreate();
		console.log(loginUserInformation);
	};

	vm.register = function() {
		$state.go('register');
	};

	
}

