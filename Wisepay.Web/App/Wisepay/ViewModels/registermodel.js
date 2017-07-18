wisepaymodule.controller("registermodel", ['$scope', '$routeParams', 'viewModelHelper', '$filter', 'Auth', '$location', function ($scope, $routeParams, viewModelHelper, $filter, Auth, $location) {
    var today = new Date();

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Welcome to Registration Page";
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


    $('#expirydate')
           .daterangepicker({
               startDate: today,
               singleDatePicker: true,
               showDropdowns: true,
               minDate: today,
               locale: {
                   format: 'DD/MM/YYYY'
               }
           },
               function (start, end, label) {
                   var selectedStartDate = $filter('date')(new Date(start), "dd/MM/yyyy");
                   $scope.expirydate = selectedStartDate;
               });

    $('#instituteexpirydate')
          .daterangepicker({
              startDate: today,
              singleDatePicker: true,
              showDropdowns: true,
              minDate: today,
              locale: {
                  format: 'DD/MM/YYYY'
              }
          },
              function (start, end, label) {
                  var selectedStartDate = $filter('date')(new Date(start), "dd/MM/yyyy");
                  $scope.instituteexpirydate = selectedStartDate;
              });


    $scope.registercandidate = function () {

    };

    $scope.registerinstitute = function () {

    };

    initialize();

}]);