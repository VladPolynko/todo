angular
    .module('todo')
    .directive('todoList', todoList);

todoList.$inject = [];

function todoList() {
    return {
        controller: 'TodoController',
        controllerAs: 'TodoCtrl',
        templateUrl: 'todo/list/todo-list.html'
    };
}
