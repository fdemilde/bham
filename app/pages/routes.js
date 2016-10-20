// Simple Route Setup for testing
module.exports = ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

// OLD ROUTES //

/*(function() {
  'use strict';

  angular
    .module('bhamDesign')
    .config(routerConfig);

  /** @ngInject
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main'
      })
      .state('gallery', {
        url: '/:mainId',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryController as gallery'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})(); */
