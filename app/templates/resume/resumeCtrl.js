/**
 * Created by kitchiong on 9/22/15.
 */

(function (){

    'use strict';

    angular.module('appController').controller('resumeCtrl',
        ['$scope', function($scope) {

            /*
             * object that stores resume information
             */
            $scope.myResume = {

                basics : {

                    firstName: "Kit Chio",
                    lastNmae: "Ng",
                    nickName: "Charlie",
                    phone: "408-221-2865",
                    email: "kcng@ucdavis.edu"
                }
            }
        }]);
})();