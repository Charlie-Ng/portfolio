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
                    name: "CA DMV Chinese Written Test",
                    projectDescription: "A web app to help people who want to take California DMV written test in either Traditional or Simplified Chinese.",
                    generalDescription: "",
                    languages: "Ionic 2, Angular",
                    url: "http://chinesedmvca.com",
                    img: "content/images/dmv-project.png",
                    github: "https://github.com/Charlie-Ng/dmvTest"
                },

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
                    img: "content/images/PortfiloWeb2.png",
                    github: "https://github.com/Charlie-Ng/portfolio"
                },

                {
                    name: "Task Management Web App (deactivated)",
                    projectDescription: "A mobile-responsive web application that helps keep track of task with a login system.",
                    generalDescription: "Designed and implement a to-do-list like web app with a login system",
                    languages: "Using JavaScript, HTML/CSS, Bootstrap, and MeteorJS",
                    url: "https://todochar.herokuapp.com",
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
                    email: "N/A"
                },
                
                objective: "Software Engineer with hands-on experience in full-stack web development, including front-end components, MVC architecture, RESTful API, database development, performance enhancement, and unit testing. Collaborative and accountable team player with abilities to work and solve problems independently. Seeking opportunities to work on small-to-large projects using modern technologies.",
                
                education: {
                    
                    university: "University of California, Davis",
                    shortUName: "UC Davis",
                    major: "Computer Science, BS",
                    shortMajor: "CS, BS",
                    minor: "none",
                    GPA: "3.2/4.0",
                    graduateDate: "June 2016",
                    courses: ["Programming Languages", "Operating Systems", "Software Engineering", "Web Development", "Web Programming", "Computer Architecture", "Computer Networks", "Computer Security",
                        "Advanced Java", "Data Structure", "Assembly Languages", "C++ for C/Java Programmers", "Theory of Computation", "Algorithm Design and Analysis", "Abstract Mathematics", "Combinatorics", "Number Theory"]
                },
                
                skills: {

                    languages: ["JavaScript", "Java", "C", "C++"],
                    webLang: ["AngularJS", "Angular Material", "RESTful API", "MongoDB", "HTML5/CSS3", "NodeJS", "jQuery", "Mocha (unit testing)", "Protractor (e2e testing)", "Responsive Design"],
                    familiar: ["Git", "Linux", "Bootstrap", "UX", "npm", "Bower", "Grunt", "Gulp"],
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
                    },

                    cs: {
                       name: "C#",
                        rate: 8
                    },

                    sql: {
                        name: "SQL",
                        rate: 7
                    }
                },
                
                experiences: {

                    job2 : {

                        title: "Applications Developer",
                        company: "UC Davis",
                        period: "June 2015 - June 2016",
                        oneLine: "Application Developer, UC Davis, June 2015 - June 2016",
                        duties: {
                            duty1: "・Created several interfaces and administrative features for UC Davis web app 'Aggiefeed', a Twitter-like campus activity stream. 'https://aggiefeed.ucdavis.edu'\n" +
                            "・Written 4000+ lines of testing code using test frameworks: Mocha, Jasmine, and Protractor.\n" +
                            "・Completed a client-side search box that integrates with MongoDB full-text search.\n" +
                            "・Implemented server-side APIs, including GET, PUT, POST, DELETE with Restify and MongoDB."
                        }
                    },

                    job1 : {

                        title: "Software Engineer II",
                        company: "Certent, Inc",
                        period: "July 2016 - Present",
                        duties : {
                            duty1: "・Converting a 10-year legacy project to a UX design oriented one using AngualrJS, Bootstrap, .NET MVC, Oracle database, REST API.\n"+
                            "・Implement extensive web pages and UI components in a timely manner to meet project goals.\n" +
                            "・Hold knowledge transfer meetings for different teams to adapt to new stack.\n" +
                            "・Fix hard bugs and dug deep into corner cases to improve software quality."
        }
                    },

                    job3 : {

                        title: "Math Tutor",
                        company: "De Anza College",
                        period: "Sep 2013 - June 2014",
                        duties : {

                            duty1: "・Tutored students with different Math levels, from Algebra to Calculus."
                        }
                    }
                },
                
                leadership: {

                    leadership1: "・Technician, Chinese Student Association at UC Davis. (October, 2014 – Present)\n・President, Mathematics Club at De Anza College. (March, 2013 – June, 2014)"
                },
                
                awards: {

                    award1: "・Student Excellence Scholarship, received at UC Davis (October, 2015)\n・Inter Club Council Scholarship, received at De Anza College. (March, 2014)"
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
