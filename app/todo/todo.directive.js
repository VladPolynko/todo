angular
    .module('todo')
    .directive('todoLoad', todoLoad);

todoLoad.$inject = [];

function todoLoad() {
    return {
        controller: 'TodoController',
        controllerAs: 'todos',
        templateUrl: 'todo/todoSomePage.html'
    };
}
