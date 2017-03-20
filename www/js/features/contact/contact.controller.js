angular
	.module('eduApp.contact')
	.controller('ContactCtrl', ['$scope', '$http', ContactCtrl]);

function ContactCtrl($state, $http) {
	var vm = this;

	vm.contact = function() {
	console.log(vm);
	var messageToBeSent = {
		name : this.name,
		email : this.email,
		messageBody : this.messageBody
	};
	console.log("message");
	console.log(messageToBeSent);

	$http.post('/api/email', messageToBeSent)
		.success(function(data) {

		})

	$state.go('home');
		
	}
}