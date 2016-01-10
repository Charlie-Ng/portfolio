/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('appControllers', []);

    angular.module('appControllers').controller('appCtrl',
        ['$scope', '$mdSidenav','$window', function($scope, $mdSidenav, $window) {

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
                $scope.backGrounds =  "content/images/" + bgName;
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