﻿wisepaymodule.controller("rootviewmodel", function ($scope, viewModelHelper) {

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
    $scope.gotoregisteradminuser=function() {
        viewModelHelper.navigateTo('registeradminuser');
    }
    $scope.gotoaboutus = function () {
        //swal("", 'About Us button clicked !', "info");
        viewModelHelper.navigateTo('aboutus');
    };
    $scope.gotologin = function () {
        //swal("", 'Login button clicked !', "info");
        viewModelHelper.navigateTo('login');
    };
    $scope.gotosearch = function () {
        //swal("", 'Login button clicked !', "info");
        viewModelHelper.navigateTo('details');
    };
    $scope.gotoprocesspayment = function () {
        //swal("", 'Login button clicked !', "info");
        viewModelHelper.navigateTo('payment');
    };
    initialize();
});