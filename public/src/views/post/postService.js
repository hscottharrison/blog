angular.module('blog').service('postService', function($http){
  this.addPost = function(post){
    console.log(post)
    return $http.post('/api/posts', post)
  }
})
