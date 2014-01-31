angular.module('best_day', ["firebase"]).controller("bdctrl", ["$scope", "$firebase", function($scope, $firebase) {
    var wordJournal = new Firebase('https://quickjournal.firebaseIO.com/');
    $scope.daylist = $firebase(wordJournal);

    $scope.addDayGood = function () {
        $scope.daylist.$add({
            day: $scope.newDay.day,
            date: $scope.newDay.date
        });
        $scope.newDay.day = "";
        $scope.newDay.date = "";

    };
    }
]);


// Old code when using JUST angular (no Firebase)
/*function bdctrl($scope, $firebase) {
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
}*/

