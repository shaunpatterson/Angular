(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .directive('adProduct', adProduct);

    /* @ngInject */
    function adProduct() {
        var directive = {
            bindToController: true,
            controller: ProductController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                product: '='
            },
            templateUrl: 'app/products/product.directive.view.html'
        };
        return directive;

        /* @ngInject */
        function ProductController() {
            var vm = this;
            // I do nothing
        }
    }

})();
