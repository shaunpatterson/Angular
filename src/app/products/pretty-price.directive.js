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
            $scope.symbol = $locale.NUMBER_FORMATS.CURRENCY_SYM;
            $scope.dollars = $filter('currency')($scope.price, '', 0);
            $scope.cents = "00";
        }
    }

})();
