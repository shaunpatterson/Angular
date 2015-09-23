(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .factory('ProductsService', ProductsService);

    /** @ngInject */
    function ProductsService($http, $q) {

        var service = {
            getProducts: getProducts
        };

        return service;

        function getProducts() {
            return $http.get('/data/products.json')
                .then(success)
                .catch(failure);

            function success(response) {
                // Return just the array of products, not the entire object
                return response.data['products'];
            }

            function failure() {
                return $q.defer().reject("Failed to get products.json");
            }
        }

    } 

})();
