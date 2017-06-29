angular.module('blog').controller('postCtrl', function($scope, postService){
  $scope.addPost = function(post){
    postService.addPost(post).then(function(response){
      console.log(response);
      alert('post has been added');
    })
  }
})
