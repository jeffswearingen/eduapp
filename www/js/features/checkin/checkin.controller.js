angular
	.module('eduApp.checkin')
	.controller('CheckinCtrl', CheckinCtrl);

function CheckinCtrl() {

	var vm = this;

	vm.userCheckinInfoCreate = function() {
		var userInfo = {
			name : this.checkinInfo.name,
			meeting : this.checkinInfo.meeting
		};
		return userInfo;
	};

	vm.checkinUser = function() {
		var checkinUserInfo = vm.userCheckinInfoCreate();
		console.log(checkinUserInfo);
	};

	
}