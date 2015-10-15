require('./app.ctrl.js')
require('./blog.service.js')
  var app = angular.module('blog');


  app.controller('GistController', function($scope, dataService) {
    var post;
    var posts = [];
    dataService.getData().then(function(dataResponse) {
      var data = dataResponse;
      for (var i = 1; i < data.length; i++) {
        post = {};
        post.description = data[i].description;
        post.date = data[i].updated_at;
        post.author = data[i].owner.login;
        for (file in data[i].files) {
          post.title = data[i].files[file].filename;
        }
        posts.push(post);
      }
    });
    this.info = posts;
  });
