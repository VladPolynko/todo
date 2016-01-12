angular
    .module('todo')
    .directive('todoInfo', todoInfo);

todoInfo.$inject = [];

function todoInfo() {
  return {
    controller: 'TodoController',
    controllerAs: 'TodoCtrl',
    templateUrl: 'todo/info/todo-info.html'
  };
}
