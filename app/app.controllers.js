/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('mainCtrl', []);

    angular.module('mainCtrl').controller('mainCtrl',
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
    }]);

}());