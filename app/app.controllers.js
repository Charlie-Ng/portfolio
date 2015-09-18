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
             *
             */

            $scope.getBingBackgrounds = function() {

                mainService.getBingBackgrounds(function(err, data) {

                    if(err) {

                        console.error("ERROR: getting main background image");
                    }
                    else if(data) {

                        console.log(data);
                    }
                    else {

                        console.error("ERROR: unknown error: getting main background image ");
                    }
                });
            };

            $scope.getBingBackgrounds();
    }]);

}());