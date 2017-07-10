wisepaymodule.controller("rootviewmodel", function ($scope, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;

    var initialize = function () {
        $scope.pageHeading = "Wisepay Section";
    }
    $scope.goHome = function () {
        alert('Home button clicked');
        viewModelHelper.navigateTo('homeview');
    };
    $scope.gotoregisternewclient = function () {
        alert('Register New Client button clicked');
        viewModelHelper.navigateTo('registernewclientview');
    };
    $scope.gotoaboutus = function () {
        alert('About Us button clicked');
        viewModelHelper.navigateTo('aboutusview');
    };
    $scope.gotologin = function () {
        alert('Login button clicked');
        viewModelHelper.navigateTo('loginview');
    };
    initialize();
});