/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngMaterial', 'mainCtrl', 'ngRoute'])
        .config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {

            $routeProvider
                .when('/portfolio/Home', {
                    templateUrl: 'components/home/home.html'
                })
                .when('/portfolio/Projects', {
                    templateUrl: 'components/projects/projects.html'
                });

            $locationProvider.html5Mode({"enabled": true, "requireBase": false});

        }]);
}());