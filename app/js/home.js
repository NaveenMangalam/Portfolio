var myApp = angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    //$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/home', {
        redirectTo: '/home'
      })
    .when('/home', {
        templateUrl: 'home.html',
        controller: 'home'
      })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'contact'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'about'
    })
    .otherwise({
      redirectTo: '/home'
    });
  }]);
 myApp.controller('about', ['$scope', function($scope) {
   
    $scope.msg = "this is About page";
    alert($scope.msg);

  }]);
  myApp.controller('contact', ['$scope', function($scope) {
    $scope.msg = "this is contact page"

  }]);
  myApp.controller('home', ['$scope','$http', function($scope, $http) {
    $scope.msg = "this is home page",
    $http.get('services.json').then(function(response){
      $scope.services=response.data;
      console.log($scope.services);
    });
  }]);