var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
		{
			'name': 'Nexus 5',
			'detail': 'Android phone'
		},
		{
			'name': 'iPhone 6',
			'detail': 'Apple made a smartphone'
		}
	];
});
