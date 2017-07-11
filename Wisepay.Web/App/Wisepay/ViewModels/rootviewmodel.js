wisepaymodule.controller("rootviewmodel", function ($scope, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;

    var initialize = function () {
        $scope.pageHeading = "Wisepay Section";
    }
    $scope.goHome = function () {
        //swal("", 'Home button clicked !', "info");
        viewModelHelper.navigateTo('home');
    };
    $scope.gotoregisternewclient = function () {
        //swal("", 'Register button clicked !', "info");
        viewModelHelper.navigateTo('register');
    };
    $scope.gotoaboutus = function () {
        //swal("", 'About Us button clicked !', "info");
        viewModelHelper.navigateTo('aboutus');
    };
    $scope.gotologin = function () {
        //swal("", 'Login button clicked !', "info");
        viewModelHelper.navigateTo('login');
    };
    initialize();
});