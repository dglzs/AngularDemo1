/**
 * Created by Leo on 8/10/15.
 */
var app = angular.module('toDoApp', []);

app.controller('toDoListCtrl', ['$scope', function($scope) {
  var toDoList = this;
  toDoList.inputText = '';
  toDoList.lists = [
    {text: "running", done: false},
    {text: "workout", done: true}
  ];
  toDoList.enter = function() {
    if(toDoList.inputText) {
      toDoList.lists.push({text: toDoList.inputText, done: false});
      toDoList.inputText = '';
    }
  };
  toDoList.reset = function() {
    toDoList.inputText = '';
  };

  toDoList.clear = function() {
    toDoList.inputText = '';
    toDoList.lists = [];
  };


}]);
