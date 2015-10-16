require('./app.router.js')
require('./blog.service.js')
  var app = angular.module('blog');


  app.controller('GistController', function($scope, dataService, $routeParams) {
    var post;
    var posts = [];
    this.idx = $routeParams.item_id;
    console.log(this.idx)
    dataService.getData().then(function(dataResponse) {
      var data = dataResponse;
      for (var i = 0; i < data.length; i++) {
        post = {};
        post.description = data[i].description;
        post.date = data[i].updated_at;
        post.author = data[i].owner.login;
        post.id = data[i].id;
        for (file in data[i].files) {
          post.title = data[i].files[file].filename;
        }
        posts.push(post);
      }
    });
    this.info = posts;
  });
