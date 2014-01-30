var best_day = angular.module('best_day', []);



best_day.controller('bdctrl', function ($scope) {
 	$scope.daylist = [
 		{ 
 			day: 'This is an example', 
 			date: '11/18/1990' 
 		}
 	];

 	$scope.isGood = false;
 	$scope.isBad = false;

 	$scope.addDayGood = function () {
 		$scope.daylist.push(
 		{
 			day: $scope.newDay.day, 
 			date: $scope.newDay.date
 		});
 		$scope.isGood = true;
 		$scope.isBad = false;
 	};
 	$scope.addDayBad = function () {
 		$scope.daylist.push(
 		{
 			day: $scope.newDay.day, 
 			date: $scope.newDay.date
 		});
 		$scope.isGood = false;
 		$scope.isBad = true;
 	};
 });

