/**
 * Created by kitchiong on 9/17/15.
 */

(function() {

    'use strict';

    angular.module('portfolio').factory(
        'mainService', ['$http', function($http) {

            var MainService = {};

            MainService.getBingBackgrounds = function() {

                $http(
                    {
                        "method": 'GET',
                        "url": "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
                    })
                    .success(function(data, status, header, config) {

                        callback(false, data);
                    })
                    .error(function(data, status, header, config) {

                        callback(true, null);
                    })
            }
        }]
    );
});