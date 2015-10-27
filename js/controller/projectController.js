app.controller('projectCtrl', function($scope, $http, $filter, ngDialog, $document) {
    $http.get('data/project.json')
        .success(function(response){
            $scope.projects = response.projects;            
            $document.scrollTo(0, window.innerHeight, 300);
        });

    $scope.printSkill = function(skills) {
        var output = "";
        for(var i = 0; i < skills.length; i++) {
            output += skills[i];
            if (i < skills.length - 1) {
                output += ", ";
            }
        }
        return output;
    };

    var thumbnailRoot = 'assets/img/preview-';
    $scope.prjThumbnail = function(projectName) {
        var imglink = projectName.replace(/ /g, '_').toLowerCase();
        return thumbnailRoot + imglink + '.jpg';
    };

    $scope.selectProject = function(id) {
        this.selected = $filter('filter')($scope.projects, function (d) {return d.id === id;})[0];
        console.log(this.selected);        
    };

    $scope.openDetail = function (id) {
        $scope.selected = $filter('filter')($scope.projects, function (d) {return d.id === id;})[0];
        ngDialog.open({
            template: template_root + 'project_item.html',
            controller: 'projectCtrl',
            className: 'ngdialog-theme-plain custom-width',
            scope: $scope
        });
    };
});