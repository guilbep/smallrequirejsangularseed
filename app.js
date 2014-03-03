define('app', ['angular', 'angular-route'], function(angular) {
    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controllerProvider = $controllerProvider;
        app.compileProvider = $compileProvider;
        app.routeProvider = $routeProvider;
        app.filterProvider = $filterProvider;
        app.provide = $provide;

        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            resolve: {
                load: function($q, $rootScope) {
                    var dfrd = $q.defer();
                    require(['home2'], function() {
                        dfrd.resolve();
                        $rootScope.$apply();
                    })
                    return dfrd.promise;
                }
            }
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    });
    return app;
});