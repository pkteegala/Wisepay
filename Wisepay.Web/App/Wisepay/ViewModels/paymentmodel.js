wisepaymodule.controller("paymentmodel", ['$scope', '$routeParams', 'viewModelHelper','Auth','$location', function ($scope, $routeParams, viewModelHelper,Auth,$location) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Insitute Details Page";
    };

    $scope.$watch(Auth.isLoggedIn, function (value, oldValue) {

        if (!value && oldValue) {
            console.log("Disconnect");
            $location.path('/login');
            viewModelHelper.navigateTo('login');
        }

        if (value) {
            console.log("Connect");
            //Do something when the user is connected
        }

    }, true);

    $scope.pay = function() {
        swal("", 'Payment Successfull', 'success');
    };
    initialize();
}]);