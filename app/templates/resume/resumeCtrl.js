/**
 * Created by kitchiong on 9/22/15.
 */

(function (){

    'use strict';

    angular.module('appControllers').controller('resumeCtrl',
        ['$scope', function($scope) {

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
                
                projects: {
                    
                },
                
                leadership: {
                    
                },
                
                awards: {
                    
                },
                
                links: {
                    
                }
            };

        }]);
}());
