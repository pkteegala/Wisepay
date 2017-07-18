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
        publicAccess: true
    });
    $routeProvider.when('/home', {
        templateUrl: '/App/Wisepay/Views/homeview.html',
        controller: 'homemodel',
        publicAccess: true
    });
    $routeProvider.when('/register', {
        templateUrl: '/App/Wisepay/Views/registerview.html',
        controller: 'registermodel',
        controllerAs: 'vm'
    });
    $routeProvider.when('/registeradminuser', {
        templateUrl: '/App/Wisepay/Views/registeradminuserview.html',
        controller: 'registeradminusermodel',
        publicAccess: true
    });
    $routeProvider.when('/aboutus', {
        templateUrl: '/App/Wisepay/Views/aboutusview.html',
        controller: 'aboutusmodel',
        publicAccess: true
    });
    $routeProvider.when('/login', {
        templateUrl: '/App/Wisepay/Views/loginview.html',
        controller: 'loginmodel',
        publicAccess: true
    });
    $routeProvider.when('/payment', {
        templateUrl: '/App/Wisepay/Views/paymentview.html',
        controller: 'paymentmodel',
        controllerAs: 'vm'
    });
    $routeProvider.when('/details', {
        templateUrl: '/App/Wisepay/Views/detailsview.html',
        controller: 'detailsmodel',
        controllerAs: 'vm'
    });

    $routeProvider.otherwise({
        redirectTo: '/login'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
wisepaymodule.run(function ($rootScope, $location, $cookies, $http) {

    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });

});
wisepaymodule.factory('wisepayService',
    function ($http, $location, viewModelHelper, statusDropdown) {
        return MyApp.wisepayService($http,
            $location, viewModelHelper, statusDropdown);
    });
(function() {
    'use strict';
    wisepaymodule.factory('Auth', Auth);
    //Auth.$inject = ['$http', '$cookies', '$rootScope', '$timeout'];

    function Auth($http, $cookies, $rootScope, $timeout) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;
    };

    function SetCredentials(username, password) {
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        // set default auth header for http requests
        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 7);
        $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
    }

    function ClearCredentials() {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    }
})();
//wisepaymodule.run(['$rootScope', '$location', 'Auth', 'viewModelHelper', function ($rootScope, $location, Auth, viewModelHelper) {
//    $rootScope.$on('$routeChangeStart',
//        function (event) {

//            if (!Auth.isLoggedIn()) {
//                console.log('DENY : Redirecting to Login');
//                event.preventDefault();
//                $location.path('/login');
//                viewModelHelper.navigateTo('login');
//            } else {
//                console.log('ALLOW');
//                $location.path('/home');
//                viewModelHelper.navigateTo('/home');
//            }
//        });
//}
//]);

(function (myApp) {
    var wisepayService = function ($http, $location,
        viewModelHelper, statusDropdown) {

        var self = this;

        self.customerId = 0;

        return this;
    };
    myApp.wisepayService = wisepayService;
}(window.MyApp));