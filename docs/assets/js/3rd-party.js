angular.module('ThirdParty', ['ngTable'])
  .factory('examplePersonData', ['$q', function ($q) {
    var deferred = $q.defer();

    var people = [];

    while (people.length < 20) {
      var person = faker.helpers.userCard();
      person.avatar = faker.internet.avatar();

      people.push(person);
    }

    deferred.resolve(people);


    return deferred.promise;
  }])
  .controller('NGTableExamples', ['$scope', '$q', 'ngTableParams', 'examplePersonData',
                                  function ($scope, $q, ngTableParams, examplePersonData) {

      $scope.people = [];

      var peopleDeferred = $q.defer();

      examplePersonData.then(function (people) {
        $scope.people = people;
        peopleDeferred.resolve();
      });

      $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10 // count per page
      }, {
        total: 0, // length of data
        getData: function ($defer, params) {
          peopleDeferred.promise.then(function () {
            params.total($scope.people.length);

            $defer.resolve($scope.people.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          });
        }
      });
}]);
