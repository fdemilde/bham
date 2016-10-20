'use strict';

module.exports = angular.module('app', [
  require('pages/home/home.routing').name,
  require('partials/layout').name
]);
