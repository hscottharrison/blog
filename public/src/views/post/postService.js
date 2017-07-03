angular.module('blog').service('postService', function($http){
  this.addPost = function(post){
    console.log(post)
    return $http.post('/api/posts', post)
  }

  this.deletePost = function(post_id){
    console.log(post_id)
    return $http.delete('/api/delete', post_id)
  }
})
