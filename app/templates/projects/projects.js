/**
 * Created by kitchiong on 10/10/15.
 */
(function() {

    'use strict';

    angular.module('appControllers').controller('projectsCtrl',
        ['$scope', function($scope) {

            /*
             * array that stores the project objects
             */
            $scope.myProjects = [];

            $scope.myProjects = [{

                project1 : {
                    name: "Aggie Feed",
                    projectDescription: "A Twitter-like campus activity stream that displays information and events submitted by approved campus departments and organizations.",
                    generalDescription: "Design and implement a Twitter-like app for UC Davis in a team of 5.",
                    languages: "Using AngularJS, Angular Material, NodeJS, and Protractor",
                    url: "www.aggiefeed.ucdavis.edu",
                    img: ""
                },

                project2 : {
                    name: "My Portfolio",
                    projectDescription: "A mobile-responsive web application that has my up-to-date information",
                    generalDescription: "Design and implement my portfolio web app u",
                    languages: "Using AngularJS, Angular Material, ExpressJS",
                    url: "www.xxx",
                    img: ""
                },

                project3: {
                    name: "Task Management Web App",
                    projectDescription: "A mobile-responsive web application that helps keep track of task with a login system.",
                    generalDescription: "Designed and implement a to-do-list like web app with a login system",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap, and MeteorJS",
                    url: "www.xxx",
                    img: ""
                },

                project4: {
                    name: "First personal website",
                    projectDescription: "My first personal mobile-responsive website.",
                    generalDescription: "Designed and implemented my first personal website",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap",
                    url: "www.xxx",
                    img: ""
                }
            }]
        }]);
})();