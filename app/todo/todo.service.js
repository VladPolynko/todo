angular
    .module('todo')
    .factory('TodoUtils', TodoUtils);

TodoUtils.$inject = [];

function TodoUtils() {
  var todoList = [
    {
      todo_value: 'First',
      status: false
    }
  ];

  var service = {
    getTodo: getTodo,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    reStatusTodo: reStatusTodo
  };

  function getTodo() {
    return todoList;
  }

  function addTodo(task) {
    task.status = false;

    todoList.push(task);
  }

  function deleteTodo(task) {
    var index = todoList.indexOf(task);

    todoList.splice(index, 1);
  }

  function reStatusTodo (task) {
    task.status = !task.status;
  }

  return service;
}
