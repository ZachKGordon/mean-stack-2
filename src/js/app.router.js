require('angular');
require('angular-route');


(function() {

  var app = angular.module('blog',['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/blog', {
        templateUrl:'/list.html',
        controller: 'GistController',
    })
      .when('/detailed/:item_id', {
        templateUrl:'/detailed.html',
        controller:'GistController',
      })
      .otherwise({
      redirectTo: "/blog",
    })
  })

})();
