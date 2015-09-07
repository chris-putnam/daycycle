/// <reference path="_all.ts" />

module days {
  'use strict';

  angular.module('days', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mgcrea.ngStrap'])
    .constant('_', _)
    .constant('three', THREE)

    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController);
}
