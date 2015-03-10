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
      $scope.todos.push({
        title : new_title,
        completed : false
      });

      $scope.new_todo = ""; // clear the input

      // save to db
      TodoService.create({ title : new_title });
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

  }]);