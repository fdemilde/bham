module.exports = angular.module('app.layout', [])
  .directive('navbar', require('./nav/nav'))
  .directive('sidebar', require('./sidebar/sidebar'))
  .directive('copyright', require('./footer/footer'));
