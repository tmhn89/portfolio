app.controller('navCtrl', function($scope, $location, $document){
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    }

    $scope.scrollTop = function() {
        $document.scrollTopAnimated(0, 300);
    }
});