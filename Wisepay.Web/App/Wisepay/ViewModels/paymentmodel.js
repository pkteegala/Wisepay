wisepaymodule.controller("paymentmodel", ['$scope', '$routeParams', 'viewModelHelper','Auth','$location','$rootScope',
    function ($scope, $routeParams, viewModelHelper, Auth, $location, $rootScope) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.IsRedirectionVisible = true;
        $scope.IspaymentDivVisible = false;
        var filldetailsofpage;

        var initialize = function() {
            $scope.pageheading = "Wisepay Insitute Details Page";
            if (($routeParams.candidatedetails != null || $routeParams.candidatedetails != undefined) &&
            ($routeParams.instituteDetails != null || $routeParams.instituteDetails != undefined)) {
                $scope.IsRedirectionVisible = false;
                $scope.IspaymentDivVisible = true;

                filldetailsofpage();

            }
        };
        filldetailsofpage = function() {
            $scope.candidatenumber = $routeParams.candidatedetails.id;
            $scope.candidatename = $routeParams.candidatedetails.name;
            $scope.candidateaddress = $routeParams.candidatedetails.comments;


            $scope.institutenumber = $routeParams.instituteDetails.id;
            $scope.institutename = $routeParams.instituteDetails.name;
            $scope.instituteaddress = $routeParams.instituteDetails.address;
        };
        var resetrouteparams = function() {
             $routeParams.candidatedetails = '';
                  $routeParams.instituteDetails = '';
        }
        var validateDataEntered = function() {
            if ($scope.paymentamount == undefined || $scope.paymentamount.length == 0) {
                swal("", "'Please enter valid payment amount!", "warning");
                return false;
            }
            if ($scope.paymentrelatedcomments == undefined || $scope.paymentrelatedcomments.length == 0) {
                swal("", "'Please enter payment related comments!", "warning");
                return false;
            }
            return true;
        };
        $scope.pay = function () {
            if (validateDataEntered()) {
                // to call paymentgateway service

                var transactionmodel = {
                    id: $scope.candidatenumber,
                    TransactionDoneBy: $rootScope.globals.currentUser.username,
                    TransactionDate: $filter('date') (new Date(), 'yyyy-MM-dd'),
                    Amount: $scope.paymentamount,
                    Comments: $scope.paymentrelatedcomments,
                    PaymentGuid:'XXFGHDK',
                    PaymentRef: 'FIRSTTRANSACTION',
                    PaymentStatus: 'SUCCESS'

                };

                $.ajax({
                    type: "POST",
                    data: JSON.stringify(transactionmodel),
                    url: "api/transactions/add",
                    contentType: "application/json",
                    success: function(data) {
                        if (data.indexOf('Failed') != -1) {
                            swal("!", data, "error");
                        }
                        swal("", 'Payment Successfull', 'success');
                        resetrouteparams();
                        viewModelHelper.navigateTo('home');
                    }
                });
            };
        };

        $scope.cancel = function() {
             swal({
                title: "Are you sure you want to cancel payment now",
                text: "You can return and search for candidate to pay at a later date.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Cancel Anyway!",
                closeOnConfirm: false
            },
              function () {
                  resetrouteparams();
              });
        };
       
        initialize();
    }
]);