angular.module('blog', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: './src/views/home/home.html',
    controller: 'homeCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: './src/views/login/login.html',
    controller: 'loginCtrl'
  })
  .state('post', {
    url: '/post',
    templateUrl: './src/views/post/post.html'
  })
})
