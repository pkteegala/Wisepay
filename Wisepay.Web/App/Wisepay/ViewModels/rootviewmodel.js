wisepaymodule.controller("rootviewmodel", function ($scope, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;

    var initialize = function () {
        $scope.pageHeading = "Wisepay Section";
    }
    $scope.goHome = function () {
        viewModelHelper.navigateTo('home');
    };
    $scope.gotoregisternewclient = function () {
        viewModelHelper.navigateTo('register');
    };
    $scope.gotoregisteradminuser=function() {
        viewModelHelper.navigateTo('registeradminuser');
    }
    $scope.gotoaboutus = function () {
        viewModelHelper.navigateTo('aboutus');
    };
    $scope.gotologin = function () {
        viewModelHelper.navigateTo('login');
    };
    $scope.gotosearch = function () {
        viewModelHelper.navigateTo('details');
    };
    $scope.gotoprocesspayment = function () {
        viewModelHelper.navigateTo('payment');
    };
    initialize();
});