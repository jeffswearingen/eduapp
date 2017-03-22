angular
	.module('eduApp.register')
	.controller('RegisterCtrl', RegisterCtrl);

function RegisterCtrl($state, $http) {

	var vm = this;

	vm.userInfoCreate = function() {
		var userInfo = {
			emailAddress : this.registerInfo.emailAddress,
			password     : this.registerInfo.password,
			name 		 : this.registerInfo.name
		};
		return userInfo;
	};

	vm.register = function() {
		console.log('call register function');
		var registerUserInformation = vm.userInfoCreate();
		console.log(registerUserInformation);

		$http.post('http://localhost:8000/api/register', registerUserInformation)
			.success(function(data) {

			})

		$state.go('home');
	};

	
}

