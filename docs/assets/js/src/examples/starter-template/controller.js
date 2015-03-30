angular.module('Examples')
  .controller('starterTemplateController', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {

    $scope.user = {};
    $scope.panels = {};

    ExamplesData.userInfo().then(function (userInfo) {
      $scope.user = userInfo;
    });

    ExamplesData.sidePanelData().then(function (sidePanelData) {
      $scope.panels = sidePanelData;
    });

}]);
