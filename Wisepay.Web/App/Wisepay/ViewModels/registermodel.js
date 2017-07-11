wisepaymodule.controller("registermodel", ['$scope', '$routeParams', 'viewModelHelper', '$filter', function ($scope, $routeParams, viewModelHelper, $filter) {
    var today = new Date();

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Welcome to Registration Page";
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

    $scope.registerinstitute = function() {

    };

    initialize();

}]);