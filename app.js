var event = angular.module("EventApp", []);

event.controller("EventCtrl", ['$scope','$http', function($scope, $http) {    
        $http.get('data/events.json').success (function(data){
            $scope.events = data.events;
        });
    }]
);
event.directive('addEvent', function() {
	$scope.events.push({
		title:$scope.eventFormTitle,
		date:$scope.eventFormDate,
		location:$scope.eventFormLocation,
		attendees:$scope.eventFormAttendees
	});
});