angular.module('blog').controller('postCtrl', function($scope, postService, homeService){

  homeService.getPosts()
  .then(function(response){
    var revArr = response.data.reverse();
    var titles = []
    for(var i = 0; i < revArr.length; i++){
      titles.push(revArr[i]);
    }
    $scope.titles = titles
  })

  $scope.addPost = function(post){
    postService.addPost(post).then(function(response){
      console.log(response);
      alert('post has been added');
    })
  }

  $scope.deletePost = function(post_id){
    postService.deletePost(post_id)
    .then(function(response){
      console.log(response);
      alert('post has been deleted')
    })
  }


})
