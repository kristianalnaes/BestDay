var best_day = angular.module('best_day', ["firebase"]);



function bdctrl($scope, $firebase) {
	var wordJournal = new Firebase('https://quickjournal.firebaseIO.com');
	$scope.entries = $firebase(wordJournal);

	$scope.daylist = [
 		{ 
 			day: 'This is an example', 
 			date: '11/18/1990' 
 		}
 	];

 	$scope.isGood = false;
 	$scope.isBad = false;
 	$scope.arrayCounter = 0;

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
};

