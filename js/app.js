var app = angular.module('portfolioApp', ['filters', 'ngRoute', 'ngDialog', 'duScroll']);
var template_root = 'views/';

app.config(function($routeProvider){      
    $routeProvider
        
        .when('/projects', {
          templateUrl: template_root + 'projects.html',
          controller: 'projectCtrl'
        })
        .when('/about',{
          templateUrl: template_root + 'about.html',
          controller: 'aboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('homeCtrl', function($scope) {    
});