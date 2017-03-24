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
		$http.post('http://localhost:8000/api/login', loginUserInformation)
			.success(function(data) {
				console.log(data);
				vm.loginInfo.name = data.name;
				vm.loginInfo.emailAddress = '';
				vm.loginInfo.password = '';
				$state.go('home');
			}).error(function() {
				$state.go('register');
			})
	};

	vm.register = function() {
		$state.go('register');
	};

	
}

