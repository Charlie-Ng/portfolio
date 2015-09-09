/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngRoute', 'ngMaterial', 'mainCtrl'])
        .config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/About', {
                    templateUrl: 'templates/about/about.html',
                    controller: 'mainCtrl'
                })
                .when('/Projects', {
                    templateUrl: 'templates/projects/projects.html', // FIXME: temporarily use app/components...
                    controller: 'mainCtrl'
                })
                .when('/Resume', {
                    templateUrl: 'templates/resume/resume.html'
                })
                .when('/Contact', {
                    templateUrl: 'templates/contact/contact.html'
                })
                .when('/Blog', {
                    templateUrl: 'templates/blog/blog.html'
                })
                .otherwise({
                    templateUrl: 'templates/main/main.html'
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