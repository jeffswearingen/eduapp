angular
	.module('eduApp.checkin')
	.controller('CheckinCtrl', CheckinCtrl);

function CheckinCtrl($state, $http) {

	var vm = this;

	vm.userCheckinInfoCreate = function() {
		var userInfo = {
			name 	: this.checkinInfo.name,
			meeting : this.checkinInfo.meeting,
			date	: new Date()
		};
		return userInfo;
	};

	vm.checkinUser = function() {
		var checkinUserInfo = vm.userCheckinInfoCreate();
		console.log(checkinUserInfo);

		$http.post('http://localhost:8000/api/checkin', checkinUserInfo)
			.success(function(data) {


			})

		$state.go('home');
	};

		vm.userInfoCreate = function() {
		var userInfo = {
			emailAddress : this.registerInfo.emailAddress,
			password     : this.registerInfo.password,
			name 		 : this.registerInfo.name
		};
		return userInfo;
	};


}