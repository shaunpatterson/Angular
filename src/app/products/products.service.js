(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .factory('ProductsService', ProductsService);

    /** @ngInject */
    function ProductsService($http, $q, $cacheFactory, _, $log) {
        var internalCache = $cacheFactory('productsServiceCache');

        var service = {
            getProducts: getProducts,
            removeProduct: removeProduct
        };

        return service;

        function getProducts() {
             /* $http caches the result *before* any transform of the response happens.  So unfortunately this does not
             *  allow the use of the cache and transformResponse (to strip off "products") options of $http. Therefore
             *  I'm manually managing the cache */

            if (internalCache.info().size > 0) {
                var deferred = $q.defer();
                deferred.resolve(internalCache.get('products'));
                return deferred.promise;
            } else {
                return $http.get('/data/products.json')
                    .then(success)
                    .catch(failure);

            }

            
            function success(response) {
                return internalCache.put('products', response.data.products);
            }

            function failure() {
                var deferred = $q.defer();
                deferred.reject("Failed to get products.json");
                return deferred.promise;
            }
        }

        function removeProduct(id) {
            $log.info("Removing product " + id); 
            var cachedProducts = internalCache.get('products');
            _.remove(cachedProducts, function(o) {
                return o.id === id;
            });
            return cachedProducts;
        }

    } 

})();
