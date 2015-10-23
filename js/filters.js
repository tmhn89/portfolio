var filters = angular.module('filters', []);
// Sentence case - uppercase first letter
filters.filter('SentenceCase', function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.slice(1);
    };
});