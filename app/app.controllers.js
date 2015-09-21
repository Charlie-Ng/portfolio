/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('appControllers', []);

    angular.module('appControllers').controller('mainCtrl',
        ['$scope', '$mdSidenav','$window', 'mainService', function($scope, $mdSidenav, $window, mainService) {

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
                { name: "Projects", icon: "ic_library_books_white_48px.svg"},
                { name: "Resume", icon: "ic_description_white_48px.svg"},
                { name: "Contact", icon: "ic_contact_phone_white_48px.svg"},
                { name: "Blog", icon: "ic_book_white_48px.svg"}
            ];

            $scope.selected = "";
            /*
             * display current option in toolbar
             */
            $scope.currentOption = "";

            /*
             * function changing the current option when clicked
             */
            $scope.getCurrentOption = function(option) {

                $scope.currentOption = option.name;
                $scope.selected = option;
            };

            /*
             * function that resets the toolbar option
             */
            $scope.resetOption = function() {

                $window.location.reload();
                $scope.currentOption = "";
            };

            /*
             * function that determines which item is selected
             */
            $scope.isActive = function(option) {

                return $scope.selected === option;
            };

            /*
             * string url that stores the background image
             */
            $scope.backGrounds = "";

            (function getBackgrounds() {

                mainService.getBackgrounds(function(err, data) {

                    if(err) {

                        console.error("ERROR: getting main background image");
                    }
                    else if(data) {

                        if(data.photos.photo.length === 0) {

                            console.warn("WARNING: no photo received");
                            $scope.backGrounds = "some default image";
                        }
                        else {

                            var photosRef = data.photos.photo;
                            var index = Math.floor((Math.random() * photosRef.length) + 0);
                            var photoRef = photosRef[index];

                            $scope.backGrounds = "https://farm" + photoRef.farm + ".staticflickr.com/" + photoRef.server + "/" + photoRef.id + "_" + photoRef.originalsecret + "_o.jpg";
                            console.log($scope.backGrounds);
                        }
                    }
                    else {

                        console.error("ERROR: unknown error: getting main background image ");
                    }
                });
            })();//end of self-invoked function getBackgrounds
    }]);

}());