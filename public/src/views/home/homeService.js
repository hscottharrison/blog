angular.module('blog').service('homeService', function($http){

  this.getPosts = function(){
    return $http.get('/api/posts')
  };

  this.addPost = function(){
    return $http.post('/api/posts')
  }
})
