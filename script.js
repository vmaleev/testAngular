// Code goes here

var app = angular.module('app', []);

app.controller('main', function($scope) {
  $scope.message = "Hello world";
  $scope.amount = 3000;
  $scope.transfer = 0;
  $scope.currentBalance = $scope.amount;

  $scope.balance = function() {
          $scope.currentBalance = $scope.amount - $scope.transfer;
      }
})

