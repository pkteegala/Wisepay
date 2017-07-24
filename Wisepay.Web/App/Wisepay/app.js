﻿var wisepaymodule = angular.module('wisepay', ['common'])
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
    $routeProvider.when('/home', {
        templateUrl: '/App/Wisepay/Views/homeview.html',
        controller: 'homemodel'
    });
    $routeProvider.when('/register', {
        templateUrl: '/App/Wisepay/Views/registerview.html',
        controller: 'registermodel',
        controllerAs: 'vm'
    });
    $routeProvider.when('/registeradminuser', {
        templateUrl: '/App/Wisepay/Views/registeradminuserview.html',
        controller: 'registeradminusermodel'

    });
    $routeProvider.when('/aboutus', {
        templateUrl: '/App/Wisepay/Views/aboutusview.html',
        controller: 'aboutusmodel'

    });
    $routeProvider.when('/login', {
        templateUrl: '/App/Wisepay/Views/loginview.html',
        controller: 'loginmodel',
        controllerAs: 'vm'
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
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
wisepaymodule.run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http) {

    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/', '/home', '/aboutus', '/registeradminuser']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });

}]);
wisepaymodule.factory('wisepayService',
    function ($http, $location, viewModelHelper, statusDropdown) {
        return MyApp.wisepayService($http,
            $location, viewModelHelper, statusDropdown);
    });
(function () {
    'use strict';
    wisepaymodule.factory('Auth', Auth);
    Auth.$inject = ['$http', '$cookies', '$rootScope', 'viewModelHelper'];

    function Auth($http, $cookies, $rootScope, viewModelHelper) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;


        function Login(firstname, lastname, username, password) {
            viewModelHelper.apiPost("api/adminuser/authenticate/" +firstname +"/" +lastname +"/" +username +"/" +password).then(function(result) {
                    return result.data;
                });
        }

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
    };
    // Base64 encoding service used by AuthenticationService
    var Base64 = {

        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");

                swal("", "There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.", "error");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };
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