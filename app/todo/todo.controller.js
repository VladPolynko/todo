angular
    .module('todo')
    .controller('TodoController', TodoController);

TodoController.$inject = [
    'TodoUtils'
];

function TodoController(TodoUtils) {
    var vm = this;
    vm.todos = TodoUtils.getTodo();

    vm.add = function (taskText) {
        TodoUtils.addTodo({
            todo_value: taskText
        });

        vm.newTask = '';
    };

    vm.del = function (todo) {
        TodoUtils.deleteTodo(todo);
    };

    vm.reStatus = function (todo) {
        TodoUtils.reStatusTodo(todo);
    };
}
