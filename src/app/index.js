'use strict';

angular.module('angularInterview', ['ngAnimate', 'ui.router', 'lodashAngularWrapper'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: 'app/products/products.view.html',
        controller: 'ProductsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
