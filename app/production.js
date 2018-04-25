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
                    controller: 'favoritesCtrl',
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
/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('appControllers', []);

    angular.module('appControllers').controller('appCtrl',
        ['$scope', '$mdSidenav','$window', '$timeout', function($scope, $mdSidenav, $window, $timeout) {

            /*
             * sidenav show/hide function
             */
            $scope.toggleNav = function() {

                $mdSidenav('left').toggle();
            };

            /*
             * menu options
             */
            $scope.menuOptions = [

                { name: "About", icon: "ic_info_outline_white_48px.svg"},
                { name: "Favorites", icon: "ic_bookmark_white_48px.svg"},
                { name: "Projects", icon: "ic_library_books_white_48px.svg"},
                { name: "Resume", icon: "ic_description_white_48px.svg"}
            ];

            /*
             * variable that stores the selected option
             */
            $scope.selected = "";

            /*
             * display current option in toolbar
             */
            $scope.currentOption = "";

            /*
             * function changing the current option when clicked
             */
            $scope.setCurrentOption = function(option) {

                $mdSidenav('left').close();
                $scope.selected = option;
            };

            /*
             * function that resets the toolbar option
             */
            $scope.resetOption = function() {

                $window.location = "http://kitchiong.com";
            };

            /*
             * function that determines which item is selected
             */
            $scope.isActive = function(option) {

                return $scope.selected === option;
            };

            /*
             * variable that watches the route for hide-gt-sm
             */
            $scope.isMainPage = true;

            /*
             * function that set hide-gt-sm to main toolbar based on route
             */
            $scope.$on('$locationChangeStart', function(next, current) {

                var currentUrlAry = current.split('/');
                var option = currentUrlAry[currentUrlAry.length - 1];
                $scope.isMainPage = option === "";
                $scope.currentOption = option;
                $scope.selected = option;
            });

            /*
             * string url that stores the background image
             */
            $scope.backGrounds = "";

            function getBackgrounds() {

                var bgName = "bg" + Math.floor((Math.random() * 5) + 1) + ".jpg";

                $timeout(function() {

                    // $scope.backGrounds =  "content/images/" + bgName;
                    $scope.backGrounds =  "content/images/bg6.jpg";
                },300);
            }

            getBackgrounds();

            //(function getBackgrounds() {
            //
            //    mainService.getBackgrounds(function(err, data) {
            //
            //        if(err) {
            //
            //            console.error("ERROR: getting main background image");
            //        }
            //        else if(data) {
            //
            //            if(data.photos.photo.length === 0) {
            //
            //                console.warn("WARNING: no photo received");
            //                $scope.backGrounds = "some default image";
            //            }
            //            else if(data.stat === "ok") {
            //
            //                var photosRef = data.photos.photo;
            //                var index = Math.floor((Math.random() * photosRef.length) + 0);
            //                var photoRef = photosRef[index];
            //
            //                $scope.backGrounds = "https://farm" + photoRef.farm + ".staticflickr.com/" + photoRef.server + "/" + photoRef.id + "_" + photoRef.originalsecret + "_o.jpg";
            //                //console.log($scope.backGrounds);
            //            }
            //        }
            //        else {
            //
            //            console.error("ERROR: unknown error: getting main background image ");
            //        }
            //    });
            //})();//end of self-invoked function getBackgrounds
    }]);

}());
/**
 * Created by kitchiong on 9/17/15.
 */

(function() {

    'use strict';

    angular.module('appServices').factory('mainService',
        ['$http',
            function($http) {

                var MainService = {};

                /*
                 * function that gets image JSON from flickr
                 */
                MainService.getBackgrounds = function(callback) {

                    $http(
                        {

                            "method": "get",
                            "url": "https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&extras=original_format&api_key=530881793e24af5bd2e1bff43b9eb760&user_id=135578447@N04&format=json&nojsoncallback=1"
                        })
                    //$http.jsonp("https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&api_key=530881793e24af5bd2e1bff43b9eb760&user_id=135578447@N04&format=json")
                        .success(function(data) {

                            callback(false, data);
                        })
                        .error(function(data, status, header, config) {

                            callback(true, null);
                        });
                };

                return MainService;
            }
        ]
    );
}());
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

/**
 * Created by kitchiong on 1/9/16.
 */
(function() {

    'use strict';

    angular.module('appControllers').controller('favoritesCtrl',
        ['$scope','$mdDialog','$mdMedia', '$sce', function($scope, $mdDialog, $mdMedia, $sce) {

            //array of favorites
            $scope.favoritesCollection = [];

            //current selected favorite
            $scope.selectedFavorite = {};

            $scope.favoritesCollection = [

                {
                    name: "Is Programming Hard to Learn?",
                    author: "Code.org",
                    description: "Code.org® is a non-profit dedicated to expanding participation in computer science by making it available in more " +
                    "schools, and increasing participation by women and underrepresented students of color. Their vision is that every student in every " +
                    "school should have the opportunity to learn computer science. We believe computer science and computer programming should be part " +
                    "of the core curriculum in education, alongside other science, technology, engineering, and mathematics (STEM) courses, such as biology, " +
                    "physics, chemistry and algebra.",
                    comment: "Learning programming may be intimidating at first. " +
                    "Listen to some of the great founders, Mark Zuckerberg, Bill Gates, Jack Dorsey, etc, to see their opinions on programming.",
                    link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/IoPx_rSicrM?html5=1"),
                    imgUrl: "content/favorites/YouTubeSquareLogo.png",
                    iconRef: "content/icons/ic_video_library_white_48px.svg",
                    type: "video"
                },

                {
                    name: "Don't Make Me Think",
                    author: "Steve Krug",
                    description: "Since Don’t Make Me Think was first published in 2000, hundreds of thousands " +
                    "of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand " +
                    "the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, " +
                    "it’s one of the best-loved and most recommended books on the subject.",
                    comment: "User experience testing is essential for the creation of a successful website. " +
                    "However, hiring people to do usability testing costs money & time. This book teaches what you should know about UX.",
                    link: "http://www.amazon.com/gp/product/0321965515/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=1944687642&pf_rd_s=lpo-top-stripe-1&pf_rd_t=201&pf_rd_i=0321344758&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=119C7EZ3PV279GGHRNSN",
                    imgUrl: "content/favorites/dontmakemethink.jpg",
                    iconRef: "content/icons/ic_bookmark_white_48px.svg",
                    type: "book"
                },

                {
                    name: "What We're Learning From Online Education",
                    author: "Daphne Koller",
                    description: "Daphne Koller is enticing top universities to put their most intriguing courses online for free -- not just as a service, but as a way to research how people" +
                    " learn. With Coursera (cofounded by Andrew Ng), each keystroke, quiz, peer-to-peer discussion and self-graded assignment builds an unprecedented pool of data on how knowledge is processed." +
                    "With Coursera, Daphne Koller and co-founder Andrew Ng are bringing courses from top colleges online, free, for anyone who wants to take them",
                    comment: "With a limited number of seats in a classroom, it's impossible for thousands of students to enroll, but with online lectures, it is truly possible. " +
                    "Daphne Koller (Founder of Coursera) gave a great summary of the value of free online education.",
                    link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/U6FvJ6jMGHU?html5=1"),
                    imgUrl: "content/favorites/tedimg.gif",
                    iconRef: "content/icons/ic_video_library_white_48px.svg",
                    type: "video"

                },

                {   name: "How to Make Stress Your Friends",
                    author: "Kelly McGonigal",
                    description: "Stress. It makes your heart pound, your breathing quicken and your forehead sweat. But while stress " +
                    "has been made into a public health enemy, new research suggests that stress may only be bad for you if you believe " +
                    "that to be the case. Psychologist Kelly McGonigal urges us to see stress as a positive, and introduces us to an unsung " +
                    "mechanism for stress reduction: reaching out to others.",
                    comment: "Stress makes you sweating, heart pounding, or anxious? What happens if you view them instead, " +
                    "as signs that your body is energized, is preparing you to meet the challenge? You will be glad to have a new view of stress after watching this video.",
                    link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/RcGyVTAoXEU?html5=1"),
                    imgUrl: "content/favorites/tedimg.gif",
                    iconRef: "content/icons/ic_video_library_white_48px.svg",
                    type: "video"
                },

                {
                    name: "The Mathematics of Love",
                    author: "Dr. Hannah Fry",
                    description: "Dr. Hannah Fry is a mathematician and complexity scientist from University College London's " +
                    "Centre for Advanced Spatial Analysis. Her work revolves around exploring the patterns in human behavior and " +
                    "applying a mathematical perspective to tackle a wide range of problems across our society.",
                    comment: "Ever wonder how mathematics can be related to love and to finding the perfect partner? You are gonna love the TED video by Dr. Hannah Fry.",
                    link: $sce.trustAsResourceUrl("http://www.youtube.com/embed/N37x4GgDVBM?html5=1"),
                    imgUrl: "content/favorites/tedimg.gif",
                    iconRef: "content/icons/ic_video_library_white_48px.svg",
                    type: "video"
                }
            ];

            //preview dialog function
            $scope.showPreview = function(favorite) {

                var useFullScreen = $mdMedia('xs');

                $scope.selectedFavorite = favorite;

                $mdDialog.show({
                    scope: $scope,
                    preserveScope: true,
                    parent: angular.element(document.body),
                    controller: 'favoritesDialogCtrl',
                    templateUrl: 'templates/favorites/dialog.preview.html',
                    fullscreen: useFullScreen
                });
            };
        }]);

    //preview controller
    angular.module('appControllers').controller('favoritesDialogCtrl',
        ['$scope','$mdDialog', function($scope, $mdDialog) {

            $scope.cancel = function() {

                $mdDialog.cancel();
            };
        }]);
}());