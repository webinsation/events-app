var event = angular.module("EventApp", []);

event.controller("EventCtrl", ['$scope','$http', function($scope, $http) {    
    $http.get('data/events.json').success (function(data){
        $scope.events = data.events;
    });

    $scope.createEvent = function(event) {
    	var defaultForm = {
    		title: "",
    		date: "",
    		location: ""
    	};
    	$scope.events.push({
    		title: event.title,
    		date: event.date,
    		location: event.location
    	});
    	$scope.event = defaultForm; 
    };
}]);