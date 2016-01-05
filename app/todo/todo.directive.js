angular
    .module('todo')
    .directive('todoLoad', todoLoad);

todoLoad.$inject = [];

function todoLoad() {
    return {
        restrict: 'E',
        templateUrl: 'todo/todoSomePage.html'
    };
}