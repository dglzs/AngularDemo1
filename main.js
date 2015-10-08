/**
 * Created by Leo on 8/10/15.
 */
var app = angular.module('toDoApp', []);

app.controller('toDoListCtrl', ['$scope', function($scope) {
  var toDoList = this;
  toDoList.lists = [];
  toDoList.enter = function() {
    toDoList.lists.push($scope.inputText);
    $scope.inputText = '';
  };
  toDoList.reset = function() {
    $scope.inputText = '';
  };

  toDoList.clear = function() {
    $scope.inputText = '';
    toDoList.lists = [];
  };


}]);