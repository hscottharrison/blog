angular.module('blog').service('loginService', function($http){


  this.login = function(user){
    return $http.post('/api/login', user)
  };



})
