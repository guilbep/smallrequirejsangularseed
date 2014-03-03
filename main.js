require.config({
    "paths": {
        "vendor": "./vendor",
        "home": "home",
        "home2": "home2",
        "app" : "app",
        "angular": "vendor/angular/angular",
        "angular-route": "vendor/angular-route/angular-route",
        "angular-resource": "vendor/angular-resource/angular-resource",
        "domReady" : "vendor/requirejs-domready/domReady"
    },
    "shim": {
        "angular": {
            "exports": "angular"
        },
        "angular-resource": ["angular"],
        "angular-route": ["angular"]
    },
    "baseUrl": "/"
});

require(['domReady', "angular", "app"], function(domReady, angular) {
    domReady(function () {
        angular.element().ready(function() {
            angular.bootstrap(document, ["app"])
        });
    });
});