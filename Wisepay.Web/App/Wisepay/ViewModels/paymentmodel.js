wisepaymodule.controller("paymentmodel", ['$scope', '$routeParams', 'viewModelHelper', function ($scope, $routeParams, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Insitute Details Page";
    };

    $scope.pay = function() {
        swal("", 'Payment Successfull', 'success');
    };
    initialize();
}]);