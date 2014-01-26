var best_day = angular.module('best_day', []);



best_day.controller('bdctrl', function ($scope) {
 	$scope.daylist = [
 		{ 
 			day: 'This is an example', 
 			date: '11/18/1990' 
 		}
 	];
 	$scope.addDay = function () {
 		$scope.daylist.push(
 		{
 			day: $scope.newDay.day, 
 			date: $scope.newDay.date
 		});
 	};

 });