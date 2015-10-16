require('./app.router.js');
// This code is Molly's from when we were working together.
(function() {
  var app = angular.module('blog');
  var post;
  var posts = [];
  var data;
  var part1 = '172739eb1f023d98da9a';
  var part2 = 'b83c705dce21fb2daaca';

  app.service('dataService', function($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function() {
      return $http({
          method: 'GET',
          url: 'https://api.github.com/users/zachkgordon/gists',
          headers: {'Authorization': 'token '+ part1 + part2}
      }).then(function(resp, err) {
        return resp.data;
      });
    }
  });
})();
