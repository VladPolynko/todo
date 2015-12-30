angular
    .module('todo.controller')
    .controller('TodoController', TodoController);

TodoController.$inject = ['$scope', '$http'];

function TodoController ($scope,$http){
    $scope.todos = [];

            $http.get('data/data.json').success(function(data){
                $scope.todos = data;

                for(var i=0; i > data.length; i++){
                    $scope.todos.push(data[i].todo_value);
                    $scope.todos.push(data[i].status);
                }
        });

    $scope.add = function(){
        $scope.todos.push({
            todo_value: $scope.newTask,
            status: false
        });
        $scope.newTask = '';
        console.log($scope.todos);
        $scope.del = function(todo){
            var index = $scope.todos.indexOf(todo);
            console.log(index);
            $scope.todos.splice(index, 1);
        };
        $scope.reStatus = function(todo) {
            todo.status = !todo.status;
            console.log(todo.status);
        };
    };
}
