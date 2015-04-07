angular.module('cardApp',[])
  .factory('data', ['$http', function($http) {
    return {
      getCardData: function() {
        var url = 'data/AllSets.zhCN.json';
        return $http.get(url);
      }
    };
  }])
  .controller('cardCtrl', ['$scope', '$window', 'data',
    function($scope, $window, data) {
      $scope.cardData = '';
      
      data.getCardData()
        .success(function(res) {
          if (res.error) {
            throw new Error(res.message);
          } else {
            $scope.cardData = res;
          }
        });
    }
  ]);