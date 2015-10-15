require('angular');
require('angular-route');


(function() {

  var app = angular.module('blog',['ngRoute']);
  app.config(function($routeProvider){
    $routeProvider.when('/blog', {
      template:"<h1>hello world</h1>",
      controller: "GistController",
    })
    .otherwise({
      redirectTo: "/blog",
    })
  })

})();
