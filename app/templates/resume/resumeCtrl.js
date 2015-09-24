/**
 * Created by kitchiong on 9/22/15.
 */

(function (){

    'use strict';

    angular.module('appControllers').controller('resumeCtrl',
        ['$scope', function($scope) {

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
                    email: "kcng@ucdavis.edu"
                },
                
                objective: "To obtain a job in xxxxx in the field of Computer Science",
                
                education: {
                    
                    university: "University of California, Davis",
                    major: "Computer Science, BS",
                    minor: "none",
                    GPA: "3.41/4.0",
                    graduateDate: "June 2016"
                },
                
                skills: {
                    
                    webDev: "AngularJS"
                },
                
                experiences: {
                    
                },
                
                projects: {
                    
                },
                
                leadership: {
                    
                },
                
                awards: {
                    
                },
                
                links: {
                    
                }
            };

        }]);
}());
