/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngRoute', 'ngMaterial', 'mainCtrl'])
        .config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/Home', {
                    //templateUrl: 'app/templates/home/home.html',
                    controller: 'mainCtrl'
                })
                .when('/Projects', {
                    templateUrl: 'app/templates/projects/projects.html', // FIXME: temporarily use app/components...
                    controller: 'mainCtrl'
                })
                .otherwise({
                    templateUrl: 'app/templates/home/home.html',
                });
                //.when('/Resume', {
                //    templateUrl: 'app/components/resume/resume.html'
                //})
                //.when('/About', {
                //    templateUrl: 'app/components/about/about.html'
                //})

            // FIXME: enable html5Mode when server is set up; because this requires web server
            //$locationProvider.html5Mode({"enabled": true, "requireBase": false});
        }]);
}());