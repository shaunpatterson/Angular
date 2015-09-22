(function() {
    'use strict';

    angular
        .module('angularDeveloper')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
