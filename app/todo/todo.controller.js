angular
    .module('todo')
    .controller('TodoController', TodoController);

TodoController.$inject = [
  '$scope',
  'TodoUtils'
];

function TodoController($scope,
                        TodoUtils) {

  $scope.todos = TodoUtils.getTodo();

  $scope.add = function (taskText) {
    TodoUtils.addTodo({
      todo_value: taskText
    });

    $scope.newTask = '';
  };

  $scope.del = function (todo) {
    TodoUtils.deleteTodo(todo);
  };

  $scope.reStatus = function (todo) {
    TodoUtils.reStatusTodo(todo);
  };
}
