angular.module('ubsrd', ['radian'])

function mainController($scope, $http) {

  $http.get('/structures')
    .success(function(data) {
      $scope.structures = data
    })
    .error(function(data) {
      data.log('Error: ' + data);
    });
}

