angular
  .module('TodoApp')

  // dependency injection ----v-----------------v
  .service('TodoService', ['$http', function($http) {

    // GET /api returns array of all todos
    this.list = function () {
      return $http.get('/api'); // returns promise
    };

    // POST /api creates a new todo
    this.create = function (todo) {
      return $http.post('/api', todo); // returns promise
    };

    // PUT /api/:id/complete updates a new todo
    this.complete = function (todo_id) {
      return $http.put('/api/' + todo_id + '/complete'); // returns promise
    };

    // PUT /api/:id/uncomplete updates a new todo
    this.uncomplete = function (todo_id) {
      return $http.put('/api/' + todo_id + '/uncomplete'); // returns promise
    };

    this.delete = function (todo_id) {
      return $http.delete('/api/' + todo_id); // returns promise
    };

  }]);