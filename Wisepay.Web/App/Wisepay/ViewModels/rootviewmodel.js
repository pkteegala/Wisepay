wisepaymodule.controller("rootviewmodel", ['$scope', 'viewModelHelper', '$rootScope', function ($scope, viewModelHelper, $rootScope) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.currentloggedinuser = '';


    var initialize = function () {
        $scope.pageHeading = "Wisepay Section";
        //$scope.currentloggedinuser = $rootScope.globals.currentUser.username;
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
}]);