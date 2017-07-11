wisepaymodule.controller("registeradminusermodel", ['$scope', '$routeParams', 'viewModelHelper', '$filter', function ($scope, $routeParams, viewModelHelper, $filter) {
    var today = new Date();

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Welcome to Register Admin User Page";
    };


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


   initialize();

}]);