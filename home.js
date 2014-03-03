require(['app'], function (app) {
    app.controller('HelloWorld', function ($scope) {
        $scope.greet = function () {
            return 'Hello World!'
        }
    });
    return app;
});