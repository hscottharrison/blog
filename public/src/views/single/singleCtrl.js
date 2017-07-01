angular.module('blog').controller('singleCtrl', function($scope, homeService, $stateParams){

  homeService.getPosts()
  .then(function(response){
    var posts = response.data
    $scope.post = [];
    for(var i = 0; i < posts.length; i++){
      console.log(posts[i].post_id)
      if($stateParams.id == posts[i].post_id){
        $scope.post.push(posts[i]);
      }
    }
    console.log($scope.post)
  })




})
