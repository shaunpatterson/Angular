(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController($q, ProductsService, $log) {
        var vm = this;

        vm.title = "Angular Skeleton";
        vm.subtitle = "Implement your products list on this page...";
        vm.removeProduct = removeProduct;

        activate();

        function activate() {
            var promises = [getProducts()];
            return $q.all(promises).then(function() { 
                $log.info("Products loaded");
            });
        }

        function getProducts() {
            $log.info("Getting products");
            return ProductsService.getProducts().then(function(data) {
                vm.products = data;
                return vm.products;
            });
        }

        function removeProduct(productId) {
            vm.products = ProductsService.removeProduct(productId);
        }
    }
})();
