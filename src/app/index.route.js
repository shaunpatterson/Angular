(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/products/products.view.html',
                controller: 'ProductsController',
                controllerAs: 'products'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
