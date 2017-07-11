wisepaymodule.controller("detailsmodel", ['$scope', '$routeParams', 'viewModelHelper', function ($scope, $routeParams, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Insitute Details Page";
        $('#searchresults').hide();
    };

    initialize();
}]);