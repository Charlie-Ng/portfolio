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