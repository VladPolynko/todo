angular
    .module('todo')
    .factory('TodoUtils', TodoUtils);

TodoUtils.$inject = [];

function TodoUtils() {
  var indexCount = 1;
  var todoList = [
    {
      id: 1,
      title: 'First',
      status: false,
      description: 'Desc 1',
      dateCreate: new Date()
    }
  ];

  var service = {
    getTodo: getTodo,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    reStatusTodo: reStatusTodo,
    getTodoById: getTodoById
  };

  function getTodo() {
    return todoList;
  }

  function addTodo(task) {
    indexCount++;
    task.id = indexCount;
    task.status = false;
    task.description = 'Desc 1';
    task.dateCreate = new Date();

    todoList.push(task);
  }

  function deleteTodo(task) {
    var index = todoList.indexOf(task);
    todoList.splice(index, 1);
  }

  function reStatusTodo(task) {
    task.status = !task.status;
    if (task.status) {
      task.dateDone = new Date();
    } else {
      task.dateDone = '';
    }
  }

  function getTodoById(taskId) {
    for(var i in todoList) {
      if (todoList[i].id == taskId) {
        return todoList[i];
      }
    }

    return {};
  }

  return service;
}
