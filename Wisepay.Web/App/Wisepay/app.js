var wisepaymodule = angular.module('wisepay', ['common', 'ui.bootstrap'])
   .filter('split', function () {
       return function (input, splitChar, splitIndex) {
           // do some bounds checking here to ensure it has that index
           if (input != undefined) {
               return input.split(splitChar)[splitIndex];
           }
       }
   });

wisepaymodule.config(function ($routeProvider,
                                $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/App/Wisepay/Views/wisepaylandingview.html',
        controller: 'wisepaylandingviewmodel'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
wisepaymodule.factory('wisepayService',
    function ($http, $location, viewModelHelper, statusDropdown, $mdDialog) {
        return MyApp.wisepayService($http,
            $location, viewModelHelper, statusDropdown, $mdDialog);
    });
(function (myApp) {
    var wisepayService = function ($http, $location,
        viewModelHelper, statusDropdown) {

        var self = this;

        self.customerId = 0;

        return this;
    };
    myApp.wisepayService = wisepayService;
}(window.MyApp));