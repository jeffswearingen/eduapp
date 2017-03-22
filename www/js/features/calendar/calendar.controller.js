angular
	.module('eduApp.calendar')
	.controller('CalendarCtrl', CalendarCtrl);

function CalendarCtrl() {
	return {
		restrict: 'E',
		templateUrl: 'js/features/calendar/calendar.html',
		controller: 'CalendarCtrl',
		controllerAs: 'CalendarVM'
	}
}