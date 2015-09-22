(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController() {
        var vm = this;

        vm.title = "Angular Developer Interview Skeleton";
        vm.subtitle = "Implement your products list on this page...";
    }
})();
