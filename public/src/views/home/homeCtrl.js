angular.module('blog').controller('homeCtrl', function($scope, homeService){

    homeService.getPosts()
    .then(function(response){
      $scope.posts = response.data;
    })

    homeService.getPosts()
    .then(function(response){
      var revArr = response.data.reverse();
      var titles = []
      for(var i = 0; i < 4; i++){
        titles.push(revArr[i]);
      }
      console.log(titles)
      $scope.titles = titles
    })



})
