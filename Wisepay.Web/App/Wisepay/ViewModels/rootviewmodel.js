wisepaymodule.controller("rootViewModel", function ($scope, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;

    var initialize = function () {
        $scope.pageHeading = "Wisepay Section";
    }

    $scope.goHome = function () {
        viewModelHelper.navigateTo('/');
    }

    $scope.gotoregisternewclient = function () {
        viewModelHelper.navigateTo('registernewclientview');
    }
    $scope.gotoaboutus = function () {
        viewModelHelper.navigateTo('gotoaboutusview');
    }
    initialize();
});