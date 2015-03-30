angular.module('Examples')
  .controller('starterTemplateController', ['$scope', function ($scope) {
    $scope.user = faker.helpers.userCard();
}]);
