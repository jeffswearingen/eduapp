angular
	.module('eduApp.contact')
	.controller('ContactCtrl', ContactCtrl);

function ContactCtrl($state, $http) {
	var vm = this;

	vm.contact = function() {
		console.log(vm);
		var messageToBeSent = {
			name : vm.contactInfo.name,
			email : vm.contactInfo.email,
			messageBody : vm.contactInfo.messageBody
		};
		console.log("message");
		console.log(messageToBeSent);

		$http.post('http://localhost:8000/api/email', messageToBeSent)
			.success(function(data) {

			})

		$state.go('home');
		
	}
}