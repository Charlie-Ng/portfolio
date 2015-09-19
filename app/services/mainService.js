/**
 * Created by kitchiong on 9/17/15.
 */

(function() {

    'use strict';

    angular.module('appServices').factory('mainService',
        ['$http',
            function($http) {

                var MainService = {};

                MainService.getPixabayBackgrounds = function(callback) {

                    $http(
                        {

                            "method": "get",
                            "url": "https://pixabay.com/api/?username=charlieng&key=568e1025e247d16bc275&q=landscapes&image_type=photo"
                        })
                    //$http.jsonp("https://pixabay.com/api/?username=charlieng&key=568e1025e247d16bc275&q=landscapes&image_type=photo&callback=JSON_CALLBACK")
                        .success(function(data, status, header, config) {

                            //console.log(data);
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