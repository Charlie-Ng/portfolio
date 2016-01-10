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
                    name: "The mathematics of love",
                    author: "Dr. Hannah Fry",
                    description: "Dr. Hannah Fry is a mathematician and complexity scientist from University College London's " +
                    "Centre for Advanced Spatial Analysis. Her work revolves around exploring the patterns in human behavior and " +
                    "applying a mathematical perspective to tackle a wide range of problems across our society.",
                    comment: "Ever wonder how mathematics how can be related to love and to finding the perfect partner? You are gonna love the TED video by Dr. Hannah Fry.",
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