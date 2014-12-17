angular.module('listDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope, $http) {

        var URL = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&place_name=leeds&page=2";

        function getData(page) {

            var url = 'page' + page + '.json';

            $http.get(url).
            success(function(data, status, headers, config) {
                $scope.listings = data.response.listings;
            }).
            error(function(data, status, headers, config) {
                console.log(status);
            });
        }

        var tabs = [{
            number: '1'
        }, {
            number: '2'
        }];

        $scope.tabs = tabs;
        $scope.styleList = "block";
        $scope.styleCurrentItem = "none";

        $scope.viewDescription = function(item) {
            $scope.styleList = "none";
            $scope.styleCurrentItem = "block";
            $scope.currentItem = item;
        };

        $scope.changePage = function(page) {
            getData(page);
        };

        $scope.backToList = function() {
            $scope.styleList = "block";
            $scope.styleCurrentItem = "none";
            $scope.currentItem = null;
        };

        getData(1);

    });
