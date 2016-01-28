angular
    .module('todo')
    .controller('TodoController', TodoController);

TodoController.$inject = [
  '$location', '$routeParams',
  'TodoUtils'
];

function TodoController($location, $routeParams,
                        TodoUtils) {
  var vm = this;
  vm.todos = TodoUtils.getTodo();

  if ($routeParams.todoId) {
    vm.todoInfo = TodoUtils.getTodoById($routeParams.todoId);
  }

  vm.existObject = function () {
    return Object.keys(vm.todoInfo).length === 0;
  };

  vm.add = function (taskText) {
    if(taskText.length >= 2){
      TodoUtils.addTodo({
        title: taskText
      });

      vm.newTask = '';
    }
  };
  vm.del = function (todo) {
    TodoUtils.deleteTodo(todo);
  };

  vm.reStatus = function (todo) {
    TodoUtils.reStatusTodo(todo);
  };

  vm.showTask = function (task) {
    var path = 'todo/' + task.id;
    $location.path(path);
  };
}
