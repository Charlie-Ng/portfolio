/**
 * Created by kitchiong on 9/22/15.
 */

(function (){

    'use strict';

    angular.module('appControllers').controller('resumeCtrl',
        ['$scope', function($scope) {

            $scope.myProjects = [];

            /*
             * array that stores the project objects
             */
            $scope.myProjects = [

                {
                    name: "Aggie Feed",
                    projectDescription: "A Twitter-like campus activity stream that displays information and events submitted by approved campus departments and organizations.",
                    generalDescription: "Design and implement a Twitter-like app for UC Davis in a team of 5.",
                    languages: "Using AngularJS, Angular Material, NodeJS, and Protractor",
                    url: "http://aggiefeed.ucdavis.edu",
                    img: "content/images/aggieFeedImg.png"
                },

                {
                    name: "My Portfolio",
                    projectDescription: "A mobile-responsive web application that has my up-to-date information",
                    generalDescription: "Design and implement my portfolio web app u",
                    languages: "Using AngularJS, Angular Material, ExpressJS",
                    url: "www.xxx",
                    img: ""
                },

                {
                    name: "Task Management Web App",
                    projectDescription: "A mobile-responsive web application that helps keep track of task with a login system.",
                    generalDescription: "Designed and implement a to-do-list like web app with a login system",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap, and MeteorJS",
                    url: "www.xxx",
                    img: ""
                },

                {
                    name: "First personal website",
                    projectDescription: "My first personal mobile-responsive website.",
                    generalDescription: "Designed and implemented my first personal website",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap",
                    url: "www.xxx",
                    img: ""
                }
            ];

            /*
             * object that stores resume information
             */
            $scope.myResume = {

                basics : {

                    firstName: "Kit Chio",
                    lastName: "Ng",
                    fullName: "Ng, Kit Chio",
                    nickName: "Charlie",
                    phone: "408-221-2865",
                    email: "kcng@ucdavis.edu"
                },
                
                objective: "To obtain a job in xxxxx in the field of Computer Science",
                
                education: {
                    
                    university: "University of California, Davis",
                    shortUName: "UC Davis",
                    major: "Computer Science, BS",
                    shortMajor: "CS, BS",
                    minor: "none",
                    GPA: "3.41/4.0",
                    graduateDate: "June 2016",
                    courses: ["Programming Languages", "Operating Systems", "Software Engineering", "Web Development", "Web Programming",
                        "Advanced Java", "Data Structure", "Assembly Languages", "C++ for C/Java Programmers", "Abstract Mathematics", "Combinatorics"]
                },
                
                skills: {

                    languages: ["Java", "JavaScript", "C", "C++", "HTML5/CSS3", "Git", "AngularJS", "Lunix"],
                    webLang: ["JavaScript", "AngularJS", "HTML5/CSS3", "MongoDB"],
                    java: {

                        name: "Java",
                        rate: 8
                    },

                    javascript: {

                        name: "JavaScript",
                        rate: 9
                    },

                    c: {

                        name: "C",
                        rate: 8
                    },

                    cpp: {

                        name: "C++",
                        rate: 7
                    },

                    html5css3: {

                        name: "HTML5/CSS3",
                        rate: 9
                    },

                    angularjs: {

                        name: "AngularJS",
                        rate: 9
                    },

                    git: {

                        name: "Git",
                        rate: 7
                    },

                    lunix: {

                        name: "Lunix",
                        rate: 6
                    }
                },
                
                experiences: {

                    job1 : {

                        title: "Applications Developer",
                        company: "UC Davis",
                        period: "June 2015 - present",
                        oneLine: "Application Developer, UC Davis, June 2015 - present",
                        duties: {

                            duty1: "Designed and implemented UC Davis Aggiefeed, a Twitter-like web application streaming campus news, event, and activities."
                        }
                    },

                    job2 : {

                        title: "Web Designer/Developer Intern",
                        company: "UC Davis",
                        period: "March 2015 - June 2015 (3 months)",
                        duties : {

                            duty1: "Redesigned and implemented UC Davis Physical department website."
                        }
                    },

                    job3 : {

                        title: "Math Tutor",
                        company: "De Anza College",
                        period: "Sep 2013 - June 2014 (9 months)",
                        duties : {

                            duty1: "xxxxxxxxxx xxx xxxxxxxxxxxxx xxx  xxx"
                        }
                    }
                },
                
                leadership: {
                    
                },
                
                awards: {
                    
                },
                
                links: {
                    
                }
            };

            $scope.sortCourses =function() {

                $scope.myResume.education.courses.sort(function(a, b) {

                    return b.length - a.length;
                });
            };

        }]);
}());
