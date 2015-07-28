/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngMaterial', 'mainCtrl', 'ngRoute'])
        .config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {

            $routeProvider
                .when('/home', {
                    templateUrl: '/home/home.html'
                })
                .when('/projects', {
                    templateUrl: '/projects/projects.html'
                });

            $locationProvider.html5Mode({"enabled": true, "requireBase": false});

        }]);
}());