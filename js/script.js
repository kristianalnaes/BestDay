ngular.module('bestDay', ["firebase"])
    .controller("bdctrl", ['$scope', '$firebase',
        function($scope,$firebase) {
            var daysRef = new Firebase("https://quickjournal.firebaseIO.com/daylist/");
            $scope.dayList = $firebase(daysRef);
            $scope.dayLocationInFirebase = daysRef.push();
            $scope.addDayGood = function(){
                                  // Setdata to the generated location
                                  $scope.dayLocationInFirebase.set({
                                                     desc: $scope.newDay.desc,
                                                     date: $scope.newDay.date
                                                 });

                                  //holds reference to location the object was pushed to, for direct manipulation of the value. Pass it to the scope or an array if you need it for later
                                  var pushedName = $scope.dayLocationInFirebase.name();
                                   alert(pushedName);
                                  $scope.newDay.desc = "";
                                  $scope.newDay.date = "";
                              }
            
            
        }
    ]);


   /* .controller("bdctrl", ["$scope", "$GreatService", "$firebase", function($scope, $firebase, $service) {
    var ref = new Firebase('https://quickjournal.firebaseIO.com/');
    $scope.daylist = $firebase(ref);
    $scope.theval = 'Val ' + Math.floor(Math.random() * 1001)
    ])};*/

    /*
   $scope.addDayGood = function () {
       $scope.daylist.$add({
           desc: $scope.newDay.desc,
           date: $scope.newDay.desc,
           value: $scope.theval
       });
       $scope.newDay.desc = "";
       $scope.newDay.date = "";
   }
} Code works ^ */



/*
    $scope.addDayGood = function () {

        $scope.daylist.$add({
            day: $scope.day,
            date: $scope.date,
            value: $scope.valueA
        });
        $scope.day = "";
        $scope.date = "";
    };
    $scope.removeShow = false;
    $scope.deleteShow = function() {
        $scope.removeShow = true;
    }
    $scope.deleteHide = function() {
        $scope.removeShow = false;
    }
    $scope.removeDay = function() {
        $scope.daylist.$remove($scope.day);
    }
    }*/



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

