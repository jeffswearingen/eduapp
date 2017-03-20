angular
	.module('eduApp.contact')
	.controller('ContactCtrl', ContactCtrl);

function ContactCtrl($state) {
	var vm = this;

	vm.contact = function() {
	console.log(vm);

	$state.go('home');
		
	}
}