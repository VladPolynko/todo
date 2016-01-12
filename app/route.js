angular
    .module('todo')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<todo-load></todo-load>'
                //templateUrl: 'main/main.html'
            })
            .when('/todo', {
                template: '<todo-load></todo-load>'
            })
            .when('/todo/:TodoId', {
                templateUrl: 'chapter.html'
            })
            .otherwise({
                redirectTo: '/'
            });


    });
