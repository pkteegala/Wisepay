var wisepaymodule = angular.module('wisepay', ['common'])
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
        controller: 'wisepaylandingviewmodel',
        roles: ['admin', 'user']
    });
    $routeProvider.when('/home', {
        templateUrl: '/App/Wisepay/Views/homeview.html',
        controller: 'homemodel',
        roles: ['admin', 'user']
    });
    $routeProvider.when('/register', {
        templateUrl: '/App/Wisepay/Views/registerview.html',
        controller: 'registermodel',
        requiresAuthentication: true,
        roles: ['admin', 'user']
    });
    $routeProvider.when('/registeradminuser', {
        templateUrl: '/App/Wisepay/Views/registeradminuserview.html',
        controller: 'registeradminusermodel',
        requiresAuthentication: true,
        roles: ['admin', 'user']
    });
    $routeProvider.when('/aboutus', {
        templateUrl: '/App/Wisepay/Views/aboutusview.html',
        controller: 'aboutusmodel',
        roles: ['admin', 'user']
    });
    $routeProvider.when('/login', {
        templateUrl: '/App/Wisepay/Views/loginview.html',
        controller: 'loginmodel',
        roles: ['admin', 'user']
    });
    $routeProvider.when('/payment', {
        templateUrl: '/App/Wisepay/Views/paymentview.html',
        controller: 'paymentmodel',
        requiresAuthentication: true,
        roles: ['admin', 'user']
    });
    $routeProvider.when('/details', {
        templateUrl: '/App/Wisepay/Views/detailsview.html',
        controller: 'detailsmodel',
        requiresAuthentication: true,
        roles: ['admin', 'user']
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
    function ($http, $location, viewModelHelper, statusDropdown) {
        return MyApp.wisepayService($http,
            $location, viewModelHelper, statusDropdown);
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