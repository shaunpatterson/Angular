(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .directive('adProduct', ProductDirective);

    /* @ngInject */
    function ProductDirective() {
        var directive = {
            bindToController: true,
            controller: ProductController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                product: '=',
                remove: '&'
            },
            templateUrl: 'app/products/product.directive.view.html'
        };
        return directive;

        /* @ngInject */
        function ProductController() { }
    }

})();
