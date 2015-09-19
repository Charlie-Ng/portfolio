/**
 * Created by kitchiong on 9/17/15.
 */

(function() {

    'use strict';

    angular.module('appServices').factory('mainService',
        ['$http',
            function($http) {

                var MainService = {};

                /*
                 * function that gets image JSON from flickr
                 */
                MainService.getBackgrounds = function(callback) {

                    $http(
                        {

                            "method": "get",
                            "url": "https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&api_key=530881793e24af5bd2e1bff43b9eb760&user_id=135578447@N04&format=json"
                        })
                    //$http.jsonp("https://pixabay.com/api/?username=charlieng&key=568e1025e247d16bc275&q=landscapes&image_type=photo&callback=JSON_CALLBACK")
                        .success(function(data, status, header, config) {

                            var actualJSON = receivedJSON.split('(');
                            actualJSON = actualJSON[1].split(')');

                            callback(false, actualJSON);
                        })
                        .error(function(data, status, header, config) {

                            callback(true, null);
                        });
                };

                return MainService;
            }// end of wrapper function
        ]
    );
}());