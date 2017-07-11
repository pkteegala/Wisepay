wisepaymodule.controller("loginmodel", ['$scope', '$routeParams', 'viewModelHelper', function ($scope, $routeParams, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Login Page";
    };

    $scope.redirecttoregister=function() {
        viewModelHelper.navigateTo('register');
    }
    initialize();
}]);