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
                    name: "UC Davis Aggie Feed",
                    projectDescription: "A Twitter-like campus activity stream that displays information and events submitted by approved campus departments and organizations.",
                    generalDescription: "Design and implement a Twitter-like app for UC Davis in a team of 5.",
                    languages: "Using AngularJS, Angular Material, NodeJS, and Protractor",
                    url: "http://aggiefeed.ucdavis.edu",
                    img: "content/images/aggieFeedImg.png",
                    github: ""
                },

                {
                    name: "My Portfolio",
                    projectDescription: "A mobile-responsive web application that has my up-to-date information",
                    generalDescription: "Design and implement my portfolio web app u",
                    languages: "Using AngularJS, Angular Material, ExpressJS",
                    url: "http://kitchiong.com",
                    img: "content/images/portfiloWeb.png",
                    github: "https://github.com/Charlie-Ng/portfolio"
                },

                {
                    name: "Task Management Web App",
                    projectDescription: "A mobile-responsive web application that helps keep track of task with a login system.",
                    generalDescription: "Designed and implement a to-do-list like web app with a login system",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap, and MeteorJS",
                    url: "http://todocharlie.meteor.com",
                    img: "content/images/todoWeb.png",
                    github: ""
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
                    email: "Please download PDF version to view"
                },
                
                objective: "To obtain a full-time position as a full-stack developer/software engineer in the field of Computer Science.",
                
                education: {
                    
                    university: "University of California, Davis",
                    shortUName: "UC Davis",
                    major: "Computer Science, BS",
                    shortMajor: "CS, BS",
                    minor: "none",
                    GPA: "3.26/4.0",
                    graduateDate: "June 2016",
                    courses: ["Programming Languages", "Operating Systems", "Software Engineering", "Web Development", "Web Programming",
                        "Advanced Java", "Data Structure", "Assembly Languages", "C++ for C/Java Programmers", "Theory of Computation", "Algorithm Design and Analysis", "Abstract Mathematics", "Combinatorics", "Number Theory"]
                },
                
                skills: {

                    languages: ["Java", "JavaScript", "C", "C++", "HTML5/CSS3", "Git", "AngularJS", "Lunix"],
                    webLang: ["JavaScript", "AngularJS", "HTML5/CSS3", "MongoDB"],
                    java: {

                        name: "Java",
                        rate: 7
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
                            duty1: "・Work on a UC Davis app 'Aggiefeed', a Twitter-like campus activity stream. 'https://aggiefeed.ucdavis.edu'\n" +
                            "・Technologies used: AngularJS, Angular Material, HTML5/CSS3, NodeJS, Jasmine, Grunt, etc."
                        }
                    },

                    job2 : {

                        title: "Web Designer/Developer Intern",
                        company: "UC Davis",
                        period: "March 2015 - June 2015",
                        duties : {
                            duty1: "・Redesigned, updated, and modified websites for Physical Education Department 'http://pe.ucdavis.edu/'"
                        }
                    },

                    job3 : {

                        title: "Math Tutor",
                        company: "De Anza College",
                        period: "Sep 2013 - June 2014",
                        duties : {

                            duty1: "・tutored students with different Math levels, from Algebra to Calculus."
                        }
                    }
                },
                
                leadership: {

                    leadership1: "・Technician, Chinese Student Association at UC Davis. (October, 2014 – Present)\n・President, Mathematics Club at De Anza College. (March, 2013 – June, 2014)"
                },
                
                awards: {

                    award1: "・Student Excellence Scholarship, received at UC Davis (October, 2015)\n・Carolee Erickson Memorial ICC Scholarship (Student club scholarship), received at De Anza College. (March, 2014)"
                },
                
                links: {

                    link1: "GitHub: www.github.com/Charlie-Ng\nLinkedIn: www.linkedin.com/in/kitchiong\nPortfolio: www.kitchiong.com"
                }
            };

            $scope.sortCourses =function() {

                $scope.myResume.education.courses.sort(function(a, b) {

                    return b.length - a.length;
                });
            };

        }]);
}());
