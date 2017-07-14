wisepaymodule.controller("registeradminusermodel", ['$scope', '$routeParams', 'viewModelHelper', '$filter', function ($scope, $routeParams, viewModelHelper, $filter) {
    var today = new Date();

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Welcome to Register Admin User Page";
        resetPage();
    };

    var resetPage = function() {
        $scope.userfirstname = '';
        $scope.lastname = '';
        $scope.username = '';
        $scope.userpassword = '';
        $scope.expirydate = '';
        $scope.userCommentsEntered = '';
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


    var validateDataEntered = function () {
        if ($scope.userfirstname == undefined || $scope.userfirstname.length == 0) {
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

        if ($scope.userpassword == undefined || $scope.userpassword.length == 0) {
            swal("", "'Please enter Password!", "warning");
            return false;
        }

        if ($scope.expirydate == undefined || $scope.expirydate.length == 0) {
            swal("", "'Please enter Date!", "warning");
            return false;
        }
        if ($scope.userCommentsEntered == undefined) {
            $scope.userCommentsEntered = "No Comments added";
        }

        return true;
    };

    $scope.saveadminuserentry=function() {
        if (validateDataEntered()) {
            var selectedDate = $('#expirydate').data('daterangepicker').startDate.format('YYYY-MM-DD');
            
            var addadminusermodel = {
                FirstName: $scope.userfirstname,
                LastName: $scope.lastname,
                UserName: $scope.username,
                Password: $scope.userpassword,
                Comments: $scope.userCommentsEntered,
                Registereddate: new date(),
                RoleExpirtyDate: selectedDate
               
            };

            $.ajax({
                type: "POST",
                data: JSON.stringify(addadminusermodel),
                url: "api/adminuser/add",
                contentType: "application/json",
                success: function (data) {
                    swal("", data, "info");
                    initialize();
                }
            });
            resetPage();
        };
    }
   initialize();

}]);