var best_day = angular.module('best_day', []);



best_day.controller('bdctrl', function ($scope) {
 	$scope.dayList = [
 		{ 
 			day: '', 
 			date: '' 
 		}
 	];
 	var addDay = function ($scope) {
 		$scope.addDay.push(
 		{
 			day: $scope.newDay.day, 
 			date: $scope.newDay.date
 		});
 	};

 });