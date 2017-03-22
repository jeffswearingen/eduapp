angular
	.module('eduApp.calendar')
	.config(calendarConfig);

function calendarConfig($stateProvider) {
	$stateProvider.state({
		name: 'calendar',
		url: '/calendar',
		templateUrl: 'js/features/calendar/calendar.html',
		controller: 'CalendarCtrl',
		controllerAs: 'CalendarVM'
	});
}