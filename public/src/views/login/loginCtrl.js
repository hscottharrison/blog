angular.module('blog').controller('loginCtrl', function($scope, loginService, $location){
  $scope.login = function(user){
    loginService.login(user).then(function(response){
      console.log(response.data)
      if(response.data.userFound){
        $location.path('/post')
      }
      else{
        alert('user not found')
      }
    })
  }
})
