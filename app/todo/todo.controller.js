angular
    .module('todo.controller')
    .controller('TodoController', TodoController);

TodoController.$inject = ['$scope'];

function TodoController($scope) {
  $scope.todos = [];

  $scope.add = function () {
    $scope.todos.push({
      todo_value: $scope.newTask,
      status: false
    });

    $scope.newTask = '';
  };

  $scope.del = function (todo) {
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.reStatus = function (todo) {
    todo.status = !todo.status;
  };
}
