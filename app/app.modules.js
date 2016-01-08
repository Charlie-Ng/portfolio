/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngRoute', 'ngMaterial', 'appControllers', 'appServices'])
        .config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {

            $routeProvider
                .when('/About', {
                    templateUrl: 'templates/about/about.html'
                })
                .when('/Projects', {
                    controller: 'resumeCtrl',
                    templateUrl: 'templates/projects/projects.html'
                })
                .when('/Resume', {
                    controller: 'resumeCtrl',
                    templateUrl: 'templates/resume/resume.html'
                })
                .when('/Favorites', {
                    templateUrl: 'templates/favorites/favorites.html'
                })
                .when('/', {
                    templateUrl: 'templates/main/main.html'
                })
                .otherwise({
                    templateUrl: 'templates/main/main.html'
                    //redirectTo: '/'
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

    angular.module('appServices', []);

}());