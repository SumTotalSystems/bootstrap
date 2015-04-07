angular.module('Examples')
  .service('formLayoutService', function () {

  })
  .controller('formLayoutController', ['$scope', 'ExamplesData', 'formLayoutService', function ($scope, ExamplesData, formLayoutService) {

    $scope.user = {
      email: ''
    };
    $scope.panels = {};

  }])
  .controller('formFooterController', function () {

  });
