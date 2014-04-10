angular.module('score_plotter', ['radian'])

.controller('mainController', function($scope, $http) {

})

.directive('fileDropzone', function() {
  return {
    restrict: 'A',
    scope: {
        fileName: '='
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
        //type = file.type;
        //size = file.size;
        //reader = new FileReader();
        //reader.readAsDataURL(file);
        return scope.$apply(function() {
            scope.fileName = name;
        });
        //reader.onload = function(evt) {
        //  if (checkSize(size) && isTypeValid(type)) {
        //    return scope.$apply(function() {
        //      scope.file = evt.target.result;
        //      if (angular.isString(scope.fileName)) {
        //        return scope.fileName = name;
        //      }
        //    });
        //  }
        //};
        //return false;
      });
    }
  };
});
