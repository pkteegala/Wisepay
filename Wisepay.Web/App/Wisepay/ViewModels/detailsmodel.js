wisepaymodule.controller("detailsmodel", ['$scope', '$routeParams', 'viewModelHelper','Auth','$location', function ($scope, $routeParams, viewModelHelper,Auth,$location) {

    var getinstitutesregistered;
    var gettransactiondetails;

    $scope.viewModelHelper = viewModelHelper;
    var initialize = function () {
        $scope.pageheading = "Wisepay Insitute Details Page";
        getinstitutesregistered();
        $('#searchresults').hide();
        $('#transactiondetailsDiv').hide();
    };
     getinstitutesregistered= function() {
         viewModelHelper.apiGet('api/institutes/get', null, function(result) {
             if(result.data == undefined || result.data.length == 0) {
                    swal("Oops!!",
                        "something went wrong with data from DB. No institutes returned " + result.statusText,
                        "info");
                } else {
                    $scope.myinstituteslist = result.data;
                }
            });
     }

     $scope.instituteselecteditemchanged = function() {
        $routeParams.instituteDetails = $scope.institutename;
        viewModelHelper.apiGet('api/members/get/' + $scope.institutename.id,
            null,
            function(result) {
                if (result.data == undefined || result.data.length == 0) {
                    swal("Oops!!",
                        "something went wrong with data from DB. No institute details returned " + result.statusText,
                        "info");
                } else {
                    $scope.mycandidateslist = result.data;
                }
            });
    }

    $scope.candidateselecteditemchanged = function () {
         viewModelHelper.apiGet('api/member/getdetails/' + $scope.candidatename.id, null,
              function(result) {
                  if (result.data == undefined || result.data.length == 0) {
                      swal("Oops!!",
                          "something went wrong with data from DB. No candidate details returned " + result.statusText,
                          "info");
                  } else {
                      $scope.candidatedetails = result.data;
                      $routeParams.detailsofcandidate = $scope.candidatedetails;
                      $('#searchresults').show();
                      gettransactiondetails($scope.candidatename.id);
                  }
                  //initialize();
              });
    }
    gettransactiondetails = function (memberId) {
        viewModelHelper.apiGet('api/transactions/getbymember' +memberId, null,
              function(result) {
                  if (result.data == undefined || result.data.length == 0) {
                      swal("Oops!!",
                          "something went wrong with data from DB. No transaction details returned" + result.statusText,
                          "info");
                  } else {
                      $scope.transactionslist = result.data;
                      $routeParams.transactiondetailsofcandidate = $scope.transactionslist;
                      $('#transactiondetailsDiv').show();
                  }
                  //initialize();
              });
        
    }
    //$scope.$watch(Auth.isLoggedIn, function (value, oldValue) {

    //    if (!value && oldValue) {
    //        console.log("Disconnect");
    //        $location.path('/login');
    //        viewModelHelper.navigateTo('login');
    //    }

    //    if (value) {
    //        console.log("Connect");
    //        //Do something when the user is connected
    //    }

    //}, true);

    $scope.proceedtopayment=function() {
        viewModelHelper.navigateTo('payment');
    }

    initialize();
}]);