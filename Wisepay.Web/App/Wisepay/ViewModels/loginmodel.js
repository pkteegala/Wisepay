wisepaymodule.controller("loginmodel", ['$scope', '$routeParams', 'viewModelHelper','Auth', function ($scope, $routeParams, viewModelHelper,Auth) {

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Login Page";
    };

    $scope.redirecttoregister=function() {
        viewModelHelper.navigateTo('register');
    }
    var validateDataEntered = function () {
        if ($scope.firstname == undefined || $scope.firstname.length == 0) {
            swal("", "'Please enter First Name!", "warning");
            return false;
        }
        if ($scope.lastname == undefined || $scope.lastname.length == 0) {
            swal("", "'Please enter Last Name!", "warning");
            return false;
        }

        if ($scope.username == undefined || $scope.username.length == 0) {
            swal("", "'Please enter UserName!", "warning");
            return false;
        }

        if ($scope.password == undefined || $scope.password.length == 0) {
            swal("", "'Please enter Password!", "warning");
            return false;
        }
        return true;
    };
    $scope.letmein=function() {
        if (validateDataEntered()) {

            viewModelHelper.apiGet("api/adminuser/authenticate/" + $scope.firstname + "/" + $scope.lastname + "/" + $scope.username + "/" + $scope.password,null,function (result) {
                if (result.contains('Failed')) {
                    swal("", result, "error");
                } else {
                    var user = result;
                    Auth.setUser(user);
                }
            });
        }
       
    }
    initialize();
}]);