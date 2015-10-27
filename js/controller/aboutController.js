app.controller('aboutCtrl', function($scope, $http, $document) {    
    $http.get('data/about.json')
        .success(function(response){
            $scope.skills = response.skills;
            $scope.educations = response.educations;
            $scope.experiences = response.experiences;
            $document.scrollTo(0, window.innerHeight, 300);
        });
});