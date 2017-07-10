wisepaymodule.controller("registernewclientmodel", ['$scope', '$routeParams', 'viewModelHelper', function ($scope, $routeParams, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function() {
        $scope.pageheading = "Welcome to Register New Client Page";
    };
    initialize();
}]);