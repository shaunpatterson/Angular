(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        $logProvider.debugEnabled(true);
    }

})();
