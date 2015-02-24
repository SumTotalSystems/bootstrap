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
  .controller('gridMain', ['$scope', '$timeout', '$q', 'ngTableParams', function ($scope, $timeout, $q, ngTableParams) {
    $scope.cards = [];
    $scope.total = 1000;

    var deferred = $q.defer();

    $timeout(function () {
      for (var i = 0; i < $scope.total; i++) {
        $scope.cards.push(faker.helpers.createCard());
      }
      deferred.resolve();
    }, 200);


    $scope.tableParams = new ngTableParams({
      page: 1, // show first page
      count: 10 // count per page
    }, {
      total: $scope.total, // length of data
      getData: function ($defer, params) {
        deferred.promise.then(function () {
          $defer.resolve($scope.cards.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        });
      }
    });
}])
  .controller('alertsController', function ($scope) {
    $scope.alert = {
      "title": "Holy guacamole!",
      "content": "Best check yo self, you're not looking too good.",
      "type": "info"
    };
  })
  .controller('asideController', function ($scope) {
    $scope.aside = {
      "title": "Title",
      "content": "Hello Aside<br />This is a multiline message!"
    };

  })
.controller('DialogExampleController', function ($scope, $modal) {
    $scope.modal = {
      title: 'Title',
      content: 'Hello Modal<br />This is a multiline message!'
    };


  })
  .controller('popoverController', function ($scope) {
    $scope.popover = {
      "title": "Title",
      "content": "Hello Popover<br />This is a multiline message!"
    };
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
  }])
  .controller('BarChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.barChartData = {};
    $scope.barChartConfig = {
      "ChartConfig": {
        "columnMap": ["a", "b", "c"],
        "barType": "",
        "ChartLabelColumn": "y",
        "isStacked": true
      }
    };

    $scope.colorsHash = ExamplesData.colorsHash;

    ExamplesData.barchartData().then(function (result) {
      $scope.barChartData = result;
    });


}])
  .controller('BellChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.bellChartData = {};
    $scope.bellChartConfig = {
      "ChartConfig": {
        "columnMap": ["rating", "count", "expenses"],
        "barType": "",
        "ChartLabelColumn": "y",
        "IsStacked": true
      }
    };

    $scope.colorsHash = ExamplesData.colorsHash;

    ExamplesData.bellChartData().then(function (result) {
      $scope.bellChartData = result;
    });
}])
  .controller('BulletChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.colorsHash = ExamplesData.colorsHash;

    $scope.chartData = {};
    $scope.chartConfig = {
      'ChartConfig': {
        'ChartLabelColumn': 'category'
      }
    };
    $scope.curTheme = 'no-theme';

    ExamplesData.bulletChartData().then(function (data) {
      $scope.chartData = data;
    });

}])
  .controller('LineChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.colorsHash = ExamplesData.colorsHash;

    $scope.lineChartData = {};
    $scope.lineChartConfig = {
      "ChartConfig": {
        "columnMap": ["date", "scheduled", "regular", "overtime", "absence"],
        "barType": "",
        "titleMap": ["Scheduled", "ScheduledRegular", "Overtime", "Absence"]
      }
    };
    $scope.curTheme = 'no-theme';

    ExamplesData.lineChartData().then(function (result) {
      $scope.lineChartData = result;
    });
}])
  .controller('PieChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {

    $scope.colorsHash = ExamplesData.colorsHash;

    $scope.pieChartData = {};
    $scope.pieChartConfig = {};
    $scope.curTheme = 'no-theme';
    $scope.percentage = 4 / 5 * 100;

    ExamplesData.dounutChartData().then(function (result) {
      $scope.pieChartData = result;
    });

    $scope.pieConfig = {
      barData: [{
        "label": "Performance Ranking",
        "value": 0
      }],
      animateChart: false,
      curTheme: ExamplesData.colorsHash,
      chartAngle: 0,
      paramJson: {
        "HeaderLinkIcon": "",
        "IsCustomEditor": false,
        "ChartConfig": {
          "columnMap": ["value"],
          "barType": "bar",
          "ChartLabelColumn": "label"
        }
      },
      colorHash: ExamplesData.colorsHash
    };
    var color = "#00AED3";
    var val = 4;
    $scope.pieConfig.colorHash = '#00AED3';
    $scope.pieConfig.barData = [{
      "label": "Performance",
      "value": val,
      "color": color
    }, {
      "label": "Gap",
      "value": 5 - val,
      "color": "#e2e5e8"
    }];
}]);
