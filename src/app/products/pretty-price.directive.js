(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .directive('adPrettyPrice', PrettyPriceDirective);

    /* @ngInject */
    function PrettyPriceDirective($filter, $locale) {
        var directive ={
            scope: {
                price: '@'
            },
            controller: PrettyPriceController,
            restrict: 'E',
            template: "<sup class='symbol'>{{symbol}}</sup><span class='dollars'>{{dollars}}</span><span class='cents'>.{{cents}}</cents>"
        };
        return directive;

        /* @ngInject */
        function PrettyPriceController($scope) {
            /** Note: This only works for countries that use the symbol first and . as their decimal separator */

            $scope.symbol = $locale.NUMBER_FORMATS.CURRENCY_SYM;

            var currency = $filter('currency')($scope.price, '', 2).split($locale.NUMBER_FORMATS.DECIMAL_SEP);
            $scope.dollars = currency[0];
            $scope.cents = currency[1];
        }
    }

})();
