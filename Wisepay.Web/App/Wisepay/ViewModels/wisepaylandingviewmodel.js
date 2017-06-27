wisepaymodule.controller("wisepaylandingviewmodel", ['$scope', '$routeParams', 'viewModelHelper', '$filter', '$mdDialog', function ($scope, $routeParams, viewModelHelper, $filter, $mdDialog) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function() {
        $scope.pageheading = "Wisepay Landing Page";
    };
    initialize();
}]);