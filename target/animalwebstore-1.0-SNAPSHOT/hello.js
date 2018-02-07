var app=angular.module('demo', [])
    .controller('Hello', function($scope, $http) {
        $http.get('http://localhost:8084/animalwebstore/rest/15').
        then(function(response) {
            $scope.greeting = response.data;
        });
    });