angular
  // dependencies ----v
  .module('TodoApp', [])

  // dependencies injection---------v-------------v-------------------v--------v
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {

    // TodoService.list() returns a promise
    TodoService.list().then(function (response) {
      $scope.todos = response.data; // promise
    });

    $scope.save_todo = function(new_title) {
      var new_todo = {
        _id : "unassigned",
        title : new_title,
        completed : false
      };
      
      $scope.todos.push(new_todo);

      $scope.new_todo = ""; // clear the input

      // save to db
      TodoService.create({ title : new_title }).then(function (response) {
        new_todo._id = response.data._id;
      });
    };

    $scope.enter_saves = function($event) {
      if ($event.keyCode == 13) { // enter key
        $scope.save_todo( $scope.new_todo );
      }
    };

    // on checkbox click... ng-change was being a prick
    $scope.toggle_completed = function($event, todo_id) {
      if ($event.srcElement.checked) {
        TodoService.complete(todo_id);
      } else {
        TodoService.uncomplete(todo_id);
      }
    };

    // on button click
    $scope.delete = function( todo ) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
      TodoService.delete(todo._id);
    };

  }]);