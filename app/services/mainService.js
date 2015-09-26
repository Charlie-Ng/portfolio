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
                            "url": "https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&extras=original_format&api_key=530881793e24af5bd2e1bff43b9eb760&user_id=135578447@N04&format=json&nojsoncallback=1"
                        })
                    //$http.jsonp("https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&api_key=530881793e24af5bd2e1bff43b9eb760&user_id=135578447@N04&format=json")
                        .success(function(data) {

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