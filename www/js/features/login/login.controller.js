angular
	.module('eduApp.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl() {

	var vm = this;

	vm.userInfoCreate = function() {
		var userInfo = {
			emailAddress : this.loginInfo.emailAddress,
			password : this.loginInfo.password
		};
		return userInfo;
	};

	vm.register = function() {
		console.log('call register function');
		var registerUserInformation = vm.userInfoCreate();
		console.log(registerUserInformation);
	};

	vm.login = function() {
		console.log('call login function');
		var loginUserInformation = vm.userInfoCreate();
		console.log(loginUserInformation);
	};

	
}