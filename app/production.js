/**
 * Created by kitchiong on 7/16/15.
 */

(function() {

    'use strict';

    angular.module('portfolio', ['ngMaterial', 'mainCtrl']);

}());
/**
 * Created by kitchiong on 7/16/15.
 */
(function(){

    'use strict';

    angular.module('mainCtrl', []);

    angular.module('mainCtrl').controller('indexCtrl',
        ['$scope', function($scope) {

            $scope.helloWord = "hello";

    }]);


}());
