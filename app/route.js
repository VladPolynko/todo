angular
    .module('todo')
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'home/home.html'
      })
      .when('/todo', {
        template: '<todo-list></todo-list>'
      })
      .when('/todo/:todoId', {
        template: '<todo-info></todo-info>'
      })
      .otherwise({
        redirectTo: '/'
      });
}
