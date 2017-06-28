angular.module('blog').controller('homeCtrl', function($scope, homeService){
  homeService.getPosts()
  .then(function(response){
    $scope.posts = response.data;
  })
})
