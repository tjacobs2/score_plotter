angular.module('score_plotter', ['radian'])

.controller('mainController', function($scope, $http) {

  $scope.scores = {};

  $scope.$watch('score_file_text', function(newValue, oldValue) {
    if(newValue) {
      $scope.scores = text_to_json($scope.score_file_text);
      console.log($scope.scores);
    }
  });

})

.directive('textFileDropzone', function() {
  return {
    restrict: 'A',
    scope: {
        fileName: '=',
        fileText: '='
    },
    link: function(scope, element, attrs) {

      var processDragOverOrEnter = function(jq_event) {
        var event = jq_event.originalEvent;
        if (event != null) {
          event.preventDefault();
        }
        event.dataTransfer.effectAllowed = 'copy';
        return false;
      };

      element.bind('dragover', processDragOverOrEnter);
      element.bind('dragenter', processDragOverOrEnter);

      element.bind('drop', function(event) {
        var file, name, reader, size, type;
        if (event != null) {
          event.preventDefault();
        }
        file = event.originalEvent.dataTransfer.files[0];
        name = file.name;
        console.log(name);
        reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
          var text = reader.result;
          return scope.$apply(function() {
              scope.fileName = name;
              scope.fileText = text;
          });
        }
      });
    }
  };
});
