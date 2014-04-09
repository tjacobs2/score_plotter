angular.module('ubsrd', ['nvd3ChartDirectives'])

function mainController($scope, $http) {

  //$scope.structures = [{text: "foo", struct_id: "1"}, {text: "bar", struct_id: "2"}];

  $http.get('/structures')
    .success(function(data) {
      $scope.structures = data

      new_data = [];
      for (var structure in data) {
        structure_data = [];
        structure_data.push(data[structure].struct_id);
        structure_data.push(data[structure].total_residue);
        new_data.push(structure_data);
      }
      //$scope.testData = [{ "key": "Test Data", "values": [ [4, 3], [1, -5] ] }];
      $scope.testData = [{ "key": "Test Data", "values": new_data }];
      console.log($scope.structures);
    })
    .error(function(data) {
      data.log('Error: ' + data);
    });
}

