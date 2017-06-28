angular.module('blog').controller('loginCtrl', function($scope, loginService){
  $scope.login = function(user){
    loginService.login(user).then(function(response){
      if(response.data.userFound){
        $location.path('/post')
      }
      else{
        alert('user not found')
      }
    })
  }
})
