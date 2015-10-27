var filters = angular.module('filters', []);
// Sentence case - uppercase first letter
filters.filter('SentenceCase', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase() + input.slice(1);
    };
});
// keep output as HTML
filters.filter('Unsafe', function($sce) {
    return function(input) {
        return $sce.trustAsHtml(input);
    };
});
// output array as string
filters.filter('ToString', function($sce) {
    return function(input) {
        return input.join(', ');
    };
});