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

    var validateDataEntered = function () {
        if ($scope.institutename == undefined || $scope.institutename.length == 0) {
            swal("", "'Please enter Institute Name!", "warning");
            return false;
        }
        if ($scope.instituteaddress == undefined || $scope.instituteaddress.length == 0) {
            swal("", "'Please enter Address!", "warning");
            return false;
        }

        if ($scope.institutenumber == undefined || $scope.institutenumber.length == 0) {
            swal("", "'Please enter Phone Number!", "warning");
            return false;
        }

        if ($scope.institutecategory == undefined || $scope.institutecategory.length == 0) {
            swal("", "'Please enter Institute Category!", "warning");
            return false;
        }

        if ($scope.instituteexpirydate == undefined || $scope.instituteexpirydate.length == 0) {
            swal("", "'Please enter Date!", "warning");
            return false;
        }
        if ($scope.institutecommentsentered == undefined || $scope.institutecommentsentered.length == 0) {
            $scope.institutecommentsentered = "No Comments added";
        }

        return true;
    };

    var resetinstitutevalues = function () {
        $scope.institutename = '';
        $scope.instituteaddress = '';
        $scope.institutenumber = '';
        $scope.institutecategory = '';
        $scope.instituteexpirydate = '';
        $scope.institutecommentsentered = '';
    }
    $scope.registercandidate = function () {

    };

    $scope.registerinstitute = function () {
        resetinstitutevalues();
    };
    $scope.saveinstituteentry = function () {
        if (validateDataEntered()) {
            var selectedDate = $('#instituteexpirydate').data('daterangepicker').startDate.format('YYYY-MM-DD');

            var addinstitutemodel = {
                Name: $scope.institutename,
                Address: $scope.instituteaddress,
                PhoneNumber: $scope.institutenumber,
                Category: $scope.institutecategory,
                Comments: $scope.institutecommentsentered,
                Registereddate: $filter('date')(new Date(), 'yyyy-MM-dd'),
                MembershipExpirtyDate: selectedDate,
                IsActive: true
            };

            $.ajax({
                type: "POST",
                data: JSON.stringify(addinstitutemodel),
                url: "api/institute/add",
                contentType: "application/json",
                success: function (data) {
                    if (data.indexOf('Failed') != -1) {
                        swal("!", data, "error");
                        initialize();
                    }
                    swal("Success", data, "success");
                    initialize();
                }
            });
            //resetPage();
        };

    }
    initialize();

}]);