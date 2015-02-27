'use strict';

/**
 * @ngdoc overview
 * @name gpgadminFrontEndApp
 * @description
 * # gpgadminFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('gpgadminFrontEndApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
	activetab: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
	activetab: 'about'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
	activetab: 'help'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
	activetab: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
