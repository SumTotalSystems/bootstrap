angular.module('Examples', ['SumTotalComponents', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize'])
  .config(function ($tooltipProvider, $modalProvider) {
    angular.extend($tooltipProvider.defaults, {
      html: true
    });
    angular.extend($modalProvider.defaults, {
      html: true
    });
  })
  .service("ExamplesData", ['$q', function ($q) {
    this.barchartData = function () {
      var deferred = $q.defer();

      var barData = [
        {
          y: '2006',
          a: 100,
          b: 90,
          c: 92
        },
        {
          y: '2007',
          a: 75,
          b: 65,
          c: 14
        },
        {
          y: '2008',
          a: 50,
          b: 40,
          c: 39
        },
        {
          y: '2009',
          a: 75,
          b: 65,
          c: 9
        },
        {
          y: '2010',
          a: 50,
          b: 40,
          c: 47
        },
        {
          y: '2011',
          a: 75,
          b: 65,
          c: 72
        },
        {
          y: '2012',
          a: 100,
          b: 90,
          c: 80
        }
      ];

      deferred.resolve(barData);

      return deferred.promise;
    };

    this.lineChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          date: "Monday",
          scheduled: 200,
          regular: 150,
          overtime: 30,
          absence: 5
        },
        {
          date: "Tuesday",
          scheduled: 250,
          regular: 100,
          overtime: 80,
          absence: 5
        },
        {
          date: "Wednesday",
          scheduled: 300,
          regular: 250,
          overtime: 100,
          absence: 20
        },
        {
          date: "Thursday",
          scheduled: 100,
          regular: 80,
          overtime: 10,
          absence: 0
        },
        {
          date: "Friday",
          scheduled: 200,
          regular: 150,
          overtime: 5,
          absence: 8
        }
      ];

      deferred.resolve(data);

      return deferred.promise;
    };

    this.dounutChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          label: "Expired",
          value: 12
        },
        {
          label: "Overdue",
          value: 30
        },
        {
          label: "In Progress",
          value: 20
        }
      ];

      deferred.resolve(data);

      return deferred.promise;
    };

    this.pieChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          key: "Jan",
          y: 5
        },
        {
          key: "Feb",
          y: 2
        },
        {
          key: "Mar",
          y: 9
        },
        {
          key: "Apr",
          y: 7
        },
        {
          key: "May",
          y: 4
        },
        {
          key: "Jun",
          y: 3
        },
        {
          key: "Jul",
          y: 9
        },
        {
          key: "Aug",
          y: 9
        }
      ];

      deferred.resolve(data);

      return deferred.promise;
    };

    this.bellChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          "rating": "Unacceptable",
          "count": 10,
          "expenses": 9.5
        },
        {
          "rating": "Below",
          "count": 20,
          "expenses": 19.5
        },
        {
          "rating": "Meets",
          "count": 40,
          "expenses": 39.5
        },
        {
          "rating": "Exceeds",
          "count": 20,
          "expenses": 19.5
        },
        {
          "rating": "Outstanding",
          "count": 10,
          "expenses": 9.5
        }
      ];

      deferred.resolve(data);

      return deferred.promise;
    };

    this.bulletChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          "category": "category 1",
          "value": 8,
        },
        {
          "category": "category 2",
          "value": 4,
        }
      ];

      deferred.resolve(data);

      return deferred.promise;
    };

    this.clawChartData = function () {
      var deferred = $q.defer();

      var data = [
        {
          "id": "Competencies",
          "color": "#33c4b3",
          "percent": 100,
          "items": []
        },
        {
          "id": "Skills",
          "color": "#00aed3",
          "percent": 53,
          "items": [
            {
              "id": "REG1234",
              "name": "Regression",
              "color": "#f27c2a",
              "percent": 15,
              "items": [
                {
                  "name": "Reg Item 1",
                  "description": "Reg item descp"
                },
                {
                  "name": "Reg Item 2",
                  "description": "Reg item 2 descp"
                }
              ]
            },
            {
              "id": "OFAC342534",
              "name": "OFAC",
              "color": "#00aed3",
              "percent": 15,
              "items": [
                {
                  "name": "OFAC Item 1",
                  "description": "OFAC Item descp"
                }
              ]
            },
            {
              "id": "PMP234",
              "name": "PMP",
              "color": "#00aed3",
              "percent": 5,
              "items": [
                {
                  "name": "PMP Item 1",
                  "description": "PMP item descp"
                }
              ]
            },
            {
              "id": "SOX4",
              "name": "SOX",
              "color": "#33c4b3",
              "percent": 12,
              "items": []
            }
          ]
        },
        {
          "id": "Learning",
          "color": "#f27c2a",
          "percent": 77,
          "items": [
            {
              "id": "COMM1234",
              "name": "Communication",
              "color": "#f27c2a",
              "percent": 15,
              "items": []
            },
            {
              "id": "DERIV1234",
              "name": "Derviatives",
              "color": "#00aed3",
              "percent": 8,
              "items": []
            }
          ]
        }
      ];


      deferred.resolve(data);

      return deferred.promise;
    };
  }])

.controller('ToolTipExample', ['$scope', '$tooltip', '$sce', function ($scope, $tooltip, $sce) {
  $scope.tooltip = {
    title: 'Hello Tooltip<br />This is a multiline message!',
    checked: false
  };
  }])

.controller('DialogExampleController', function ($scope, $modal) {
    $scope.modal = {
      title: 'Title',
      content: 'Hello Modal<br />This is a multiline message!'
    };

    // Controller usage example
    //
    // var myModal = $modal({title: 'Title', content: 'Hello Modal<br />This is a multiline message!', show: false});
    // $scope.showModal = function() {
    //   myModal.$promise.then(myModal.show);
    // };
    // $scope.hideModal = function() {
    //   myModal.$promise.then(myModal.hide);
    // };

  })
  .controller('ClawCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.data = {};


    ExamplesData.clawChartData().then(function (result) {
      $scope.data = result;
    });

    $scope.showClaw = true;

    $scope.config = {
      "legendLabel": 'Impact to Capability',
      "clawLabel": 'POSITION FIT',
      "capabilityLabel": 'CAPABILITIES',
      "gapLabel": 'CURRENT CAPABILITY GAPS',
      "legendColors": ['#f27c2a', '#00aed3', '#33c4b3']
    };
  }]);;
