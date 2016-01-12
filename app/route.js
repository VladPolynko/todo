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
        template: '<todo-load></todo-load>'
      })
      .when('/todo/:TodoId', {
        templateUrl: 'chapter.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}
