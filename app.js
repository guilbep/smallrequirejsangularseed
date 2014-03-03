define('app', ['angular', 'angular-route'], function (angular) {
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controllerProvider = $controllerProvider;
        app.compileProvider = $compileProvider;
        app.routeProvider = $routeProvider;
        app.filterProvider = $filterProvider;
        app.provide = $provide;

        $routeProvider.when('/home', {
            templateUrl: 'home.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    });
    return app;
});