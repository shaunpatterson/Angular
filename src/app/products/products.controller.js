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

        activate();

        function activate() {
            var promises = [getProducts()];
            return $q.all(promises).then(function() { 
                $log.info("Products loaded");
            });
        }

        function getProducts() {
            return ProductsService.getProducts().then(function(data) {
                vm.products = data;
                return vm.products;
            });
        }
    }
})();
