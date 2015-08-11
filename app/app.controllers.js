/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('mainCtrl', []);

    angular.module('mainCtrl').controller('mainCtrl',
        ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

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

                { name: "Home"},
                { name: "Projects"},
                { name: "Resume"},
                { name: "About" }
            ];

            /*
             * display current option in toolbar
             */
            $scope.currentOption = "Home";

            /*
             * function changing the current option when clicked
             */
            $scope.getCurrentOption = function(option) {

                $scope.currentOption = option.name;
                $scope.selected = option;
            };

            /*
             * function that determines which item is selected
             */
            $scope.select = function(option) {

                $scope.selected = option;
            };

            /*
             * function that set the current selected item
             */
            $scope.isActive = function(option) {

                return $scope.selected === option;
            };
    }]);

}());