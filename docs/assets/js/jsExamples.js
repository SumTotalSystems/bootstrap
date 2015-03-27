angular.module('Examples', ['SumTotalComponents', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']) //jshint ignore:line
  .config(function ($tooltipProvider, $modalProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    angular.extend($tooltipProvider.defaults, { //jshint ignore:line
      html: true
    });
    angular.extend($modalProvider.defaults, { //jshint ignore:line
      html: true
    });
  })
  .service('ExamplesData', ['$q', function ($q) {
    //this.colorsHash = new Object();
    this.colorsHash = ["#1fbba6", "#ffc600", "#f27c2a"];

    this.barchartData = function () {
      var deferred = $q.defer();

      //jshint ignore:start
      var barData = [
        {
          y: '2006',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2007',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2008',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2009',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2010',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2011',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          y: '2012',
          a: faker.random.number({
            min: 0,
            max: 100
          }),
          b: faker.random.number({
            min: 0,
            max: 100
          }),
          c: faker.random.number({
            min: 0,
            max: 100
          })
        }
      ];

      deferred.resolve(barData);
      //jshint ignore:end

      return deferred.promise;
    };

    this.lineChartData = function () {
      var deferred = $q.defer();

      //jshint ignore:start
      var data = [
        {
          date: "Monday",
          scheduled: faker.random.number({
            min: 0,
            max: 200
          }),
          regular: faker.random.number({
            min: 0,
            max: 100
          }),
          overtime: faker.random.number({
            min: 0,
            max: 50
          }),
          absence: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          date: "Tuesday",
          scheduled: faker.random.number({
            min: 0,
            max: 200
          }),
          regular: faker.random.number({
            min: 0,
            max: 100
          }),
          overtime: faker.random.number({
            min: 0,
            max: 50
          }),
          absence: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          date: "Wednesday",
          scheduled: faker.random.number({
            min: 0,
            max: 200
          }),
          regular: faker.random.number({
            min: 0,
            max: 100
          }),
          overtime: faker.random.number({
            min: 0,
            max: 50
          }),
          absence: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          date: "Thursday",
          scheduled: faker.random.number({
            min: 0,
            max: 200
          }),
          regular: faker.random.number({
            min: 0,
            max: 100
          }),
          overtime: faker.random.number({
            min: 0,
            max: 50
          }),
          absence: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          date: "Friday",
          scheduled: faker.random.number({
            min: 0,
            max: 200
          }),
          regular: faker.random.number({
            min: 0,
            max: 100
          }),
          overtime: faker.random.number({
            min: 0,
            max: 50
          }),
          absence: faker.random.number({
            min: 0,
            max: 10
          })
        }
      ];

      deferred.resolve(data);

      //jshint ignore:end

      return deferred.promise;
    };

    this.dounutChartData = function () {
      var deferred = $q.defer();

      //jshint ignore:start
      var data = [
        {
          label: "Expired",
          value: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          label: "Overdue",
          value: faker.random.number({
            min: 0,
            max: 100
          })
        },
        {
          label: "In Progress",
          value: faker.random.number({
            min: 0,
            max: 100
          })
        }
      ];

      deferred.resolve(data);
      //jshint ignore:end

      return deferred.promise;
    };

    this.pieChartData = function () {
      var deferred = $q.defer();

      //jshint ignore:start
      var data = [
        {
          label: "Jan",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Feb",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Mar",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Apr",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "May",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Jun",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Jul",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        },
        {
          label: "Aug",
          value: faker.random.number({
            min: 0,
            max: 10
          })
        }
      ];

      deferred.resolve(data);

      //jshint ignore:end

      return deferred.promise;
    };

    this.bellChartData = function () {
      var deferred = $q.defer();

      //jshint ignore:start
      var unacceptable = {
          "rating": "Unacceptable",
          "count": faker.random.number({
            min: 0,
            max: 100
          }),
          "expenses": 0
        },
        below = {
          "rating": "Below",
          "count": 0,
          "expenses": 0
        },
        meets = {
          "rating": "Meets",
          "count": 0,
          "expenses": 0
        },
        exceeds = {
          "rating": "Exceeds",
          "count": 0,
          "expenses": 0
        },
        outstanding = {
          "rating": "Outstanding",
          "count": 0,
          "expenses": 0
        };

      unacceptable.count = faker.random.number({
        min: 0,
        max: 12
      });
      unacceptable.expenses = faker.random.number({
        min: 0,
        max: unacceptable.count > 0 ? unacceptable.count : 0
      });

      below.count = faker.random.number({
        min: 0,
        max: 37
      });
      below.expenses = faker.random.number({
        min: 0,
        max: below.count > 0 ? below.count : 0
      });

      meets.count = faker.random.number({
        min: 0,
        max: 37
      });
      meets.expenses = faker.random.number({
        min: 0,
        max: meets.count > 0 ? meets.count : 0
      });

      exceeds.count = faker.random.number({
        min: 0,
        max: 37
      });
      exceeds.expenses = faker.random.number({
        min: 0,
        max: exceeds.count > 0 ? exceeds.count : 0
      });

      outstanding.count = faker.random.number({
        min: 0,
        max: 37
      });
      outstanding.expenses = faker.random.number({
        min: 0,
        max: outstanding.count > 0 ? outstanding.count : 0
      });

      var data = [
        unacceptable,
        below,
        meets,
        exceeds,
        outstanding
      ];

      deferred.resolve(data);

      //jshint ignore:end

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

      //jshint ignore:start
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
      //jshint ignore:end

      return deferred.promise;
    };

    this.userData = function (fetchSize) {
      var deferred = $q.defer();

      var users = [];

      while (users.length < fetchSize) {
        var userCard = faker.helpers.createCard(); //jshint ignore:line
        userCard.avatarUrl = faker.internet.avatar(); //jshint ignore:line

        users.push(userCard);
      }

      deferred.resolve(users);

      return deferred.promise;
    };

    this.tabularTextData = function (fetchSize) {
      var deferred = $q.defer();

      var data = [];

      while (data.length < fetchSize) {
        //jshint ignore:start
        var datum = {
          word: faker.lorem.words(1)[0],
          sentence: faker.lorem.sentence(),
          paragraph: faker.lorem.paragraph()
        };

        data.push(datum);
        //jshint ignore:end
      }

      deferred.resolve(data);

      return deferred.promise;
    };
  }])
  .factory('examplePersonData', ['$q', function ($q) {
    var deferred = $q.defer();

    var people = [];

    while (people.length < 20) {
      //jshint ignore:start
      var person = faker.helpers.userCard();
      person.avatar = faker.internet.avatar();

      people.push(person);
      //jshint ignore:end
    }

    deferred.resolve(people);


    return deferred.promise;
    }])
  .controller('navSearch', ['$scope', '$window', function ($scope, $window) {
    $scope.searchText = '';
    $scope.results = [];

    $scope.resultHandler = function (results) {
      console.log(results);
      if (!results || !results.length || results.length > 1) {
        $scope.results = results;
        angular.element('#SearchResultsSlideout').scope().openSlideOut();
      } else if (results && results.length == 1) {
        console.log('single result!', results);
        var navUrl = results[0]._source.url.replace(/\\/g, '/');
        console.log('single result url!', results[0]._source.url);
        console.log('single result url formatted!', navUrl);
        $window.location = navUrl;
        //window.location = results[0]._source.url;
      }
    };

    $scope.submitHandler = function (searchText) {
      console.log('searchText')
      $scope.searchText = searchText;
    };

  }])
  .directive('fakeParagraphs', [function () {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        count: '@'
      },
      template: '<div><p>This is fake content. It will allways be static. Include Faker on your page and it will dynamically change. You can add the \'count\' attribute to specifiy the number of paragraphs!</p></div>',
      link: function (scope, element, attrs) {
        try {
          var p = faker.lorem.paragraphs(1); //jshint ignore:line
        } catch (e) {
          return;
        }

        var html = '';
        for (var i = 0; i < (scope.count ? parseInt(scope.count, 10) : 1); i++) {
          html += '<p>' + faker.lorem.paragraph() + '</p>'; //jshint ignore:line
        }

        element.html(html);
      }
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
        $scope.cards.push(faker.helpers.createCard()); //jshint ignore:line
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
  $scope.state = 'closed';

    $scope.aside = {
    };
  $scope.showLimit = 3;
  $scope.toggleLimit = false;

    $scope.fullOpen = function () {
      $scope.state = 'fullOpen';
    };
    $scope.halfClose = function () {
      $scope.state = 'halfOpen';
    };
  $scope.fullClose = function(){
    debugger;
    $scope.state = 'closed';
  };

  $scope.searchResults = [
  {
    "category": "Books",
    "count": "5",
    "items": [
      {
        "title": "Catered Lunch for a Week",
        "description": "Avoid the hassle of leaving for lunch everyday and enjoy a c...",
        "picUrl": faker.image.business(64,64)
      },
      {
        "title": "iPad Air Tablets",
        "description": "You have to hold iPad air to believe it, it's just 7.5 millimete...",
        "picUrl": faker.image.business(64,64)
      },
      {
        "title": "Two (2) Day Vacation",
        "description": "Enjoy 2 days vacation of your choice.",
        "picUrl": faker.image.business(64,64)
      },
      {
        "title": "Catered Lunch for a Week",
        "description": "Avoid the hassle of leaving for lunch everyday and enjoy a c...",
        "picUrl": faker.image.business(64,64)
      },
      {
        "title": "iPad Air Tablets",
        "description": "You have to hold iPad air to believe it, it's just 7.5 millimete...",
        "picUrl": faker.image.business(64,64)
      }
    ]
  },
  {
    "category": "Videos",
    "count": "2",
    "items": [
      {
        "title": "Theatre Tickets",
        "description": "Visit famous venues and view some of the most popular shows.",
        "picUrl": faker.image.fashion(64,64)
      },
      {
        "title": "Rock Climbing Adventure",
        "description": "Go on an adventure exploring mountains and caves.",
        "picUrl": faker.image.fashion(64,64)
      }
    ]
  }
];
  })
  .controller('DialogExampleController', function ($scope, $modal) {
    $scope.modal = {
      title: 'Title',
      content: 'Hello Modal<br />This is a multiline message!'
    };
  })
  .controller('tabController', function ($scope, $templateCache) {

    $scope.tabs = [
      {
        title: 'Home',
        content: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.'
      },
      {
        title: 'Profile',
        content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.'
      },
      {
        title: 'About',
        content: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade.'
      }
  ];

    $scope.tabs.activeTab = 1;

    $scope.pushTab = function () {
      $scope.tabs.push({
        title: 'Contact',
        content: 'Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.'
      });
    };

  })
  .controller('tooltipController', function ($scope, $tooltip) {

    $scope.tooltip = {
      "title": "Hello Tooltip<br />This is a multiline message!",
      "checked": true
    };
  })
  .controller('selectController', function ($scope, $http) {

    $scope.selectedIcon = '';
    $scope.selectedIcons = ['Globe', 'Heart'];
    $scope.icons = [
      {
        value: 'Gear',
        label: '<i class="fa fa-gear"></i> Gear'
      },
      {
        value: 'Globe',
        label: '<i class="fa fa-globe"></i> Globe'
      },
      {
        value: 'Heart',
        label: '<i class="fa fa-heart"></i> Heart'
      },
      {
        value: 'Camera',
        label: '<i class="fa fa-camera"></i> Camera'
      }
  ];

  })
  .controller('datepickerController', function ($scope, $http) {

    $scope.selectedDate = new Date();
    $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
    // $scope.fromDate = new Date();
    // $scope.untilDate = new Date();
    $scope.getType = function (key) {
      return Object.prototype.toString.call($scope[key]);
    };

    $scope.clearDates = function () {
      $scope.selectedDate = null;
    };

  })
  .controller('dropdownController', function ($scope, $alert) {

    $scope.dropdown = [
      {
        text: 'Another action',
        href: '#anotherAction'
      },
      {
        text: 'Display an alert',
        click: '$alert("Holy guacamole!")'
      },
      {
        text: 'External link',
        href: '/auth/facebook',
        target: '_self'
      },
      {
        divider: true
      },
      {
        text: 'Separated link',
        href: '#separatedLink'
      }

  ];

    $scope.$alert = function (title) {
      $alert({
        title: title,
        content: 'Best check yo self, you\'re not looking too good.',
        placement: 'top',
        type: 'info',
        keyboard: true,
        show: true
      });
    };

  })
  .controller('navbarController', function ($scope, $location) {
    $scope.$location = $location;
  })
  .controller('collapseController', function ($scope) {

    $scope.panels = [
      {
        title: 'Collapsible Group Item #1',
        body: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
      },
      {
        title: 'Collapsible Group Item #2',
        body: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.'
      },
      {
        title: 'Collapsible Group Item #3',
        body: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade.'
      }
  ];

    $scope.panels.activePanel = 1;

    $scope.multiplePanels = {
      activePanels: [0, 1]
    };

    $scope.pushPanel = function () {
      $scope.panels.push({
        title: 'Collapsible Group Item #4',
        body: 'Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.'
      });
    };

  })
  .controller('buttonController', function ($scope) {
    $scope.button = {
      toggle: false,
      checkbox: {
        left: false,
        middle: true,
        right: false
      },
      radio: 'left'
    };
  })
  .controller('popoverController', function ($scope, $popover) {

    $scope.popover = {
      title: 'Title',
      content: 'Hello Popover<br />This is a multiline message!'
    };

    var asAServiceOptions = {
      title: $scope.popover.title,
      content: $scope.popover.content,
      trigger: 'manual'
    };


  })
  .controller('timepickerController', function ($scope, $http) {
    $scope.time = new Date(1970, 0, 1, 10, 30);
    $scope.selectedTimeAsNumber = 10 * 36e5;
    $scope.selectedTimeAsString = '10:00';
    $scope.sharedDate = new Date(new Date().setMinutes(0));
  })
  .controller('typeheadController', function ($scope, $http) {
    $scope.selectedState = '';
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    $scope.selectedIcon = '';
    $scope.icons = [
      {
        value: 'Gear',
        label: '<i class="fa fa-gear"></i> Gear'
      },
      {
        value: 'Globe',
        label: '<i class="fa fa-globe"></i> Globe'
      },
      {
        value: 'Heart',
        label: '<i class="fa fa-heart"></i> Heart'
      },
      {
        value: 'Camera',
        label: '<i class="fa fa-camera"></i> Camera'
      }
  ];

    $scope.selectedAddress = '';
    $scope.getAddress = function (viewValue) {
      var params = {
        address: viewValue,
        sensor: false
      };
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
          params: params
        })
        .then(function (res) {
          return res.data.results;
        });
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

    $scope.showAnimation = function () {
      $scope.$$childTail.animate = true;
      $scope.$$childTail.configureChart();
    };
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
    $scope.showAnimation = function () {
      $scope.$$childTail.animateChart = true;
      $scope.$$childTail.configureChart();
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
        'ChartLabelColumn': 'category',
        'bullet': 'value'
      }
    };
    $scope.curTheme = 'no-theme';

    $scope.showAnimation = function () {
      $scope.$$childTail.animate = true;
      $scope.$$childTail.configureChart();
    };

    ExamplesData.bulletChartData().then(function (data) {
      $scope.chartData = data;
    });

}])
  .controller('LineChartCtrl', ['$scope', 'ExamplesData', function ($scope, ExamplesData) {
    $scope.colorsHash = ExamplesData.colorsHash;

    $scope.lineChartData = {};
    $scope.lineChartConfig = {
      "ChartConfig": {
        "columnMap": ["scheduled", "regular", "overtime", "absence"],
        "ChartLabelColumn": "date",
        "titleMap": ["Scheduled", "Scheduled - Regular", "Overtime", "Absence"]
      }
    };
    $scope.curTheme = 'no-theme';

    $scope.showAnimation = function () {
      $scope.$$childTail.animate = true;
      $scope.$$childTail.configureChart();
    };

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

    $scope.showAnimation = function () {
      $scope.$$childTail.animate = true;
      $scope.$$childTail.configureChart();
    };

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
}])
  .controller('WizardStepController', function ($scope) {
    $scope.activeStep = 1;

    $scope.goNext = function () {
      $scope.incrementStep();
    };

    $scope.goPrev = function () {
      $scope.decrementStep();
    };
  })
  .controller('AnotherWizardStepController', function ($scope) {
    $scope.activeStep = 1;

    $scope.goNext = function () {
      $scope.incrementStep();
    };

    $scope.goPrev = function () {
      $scope.decrementStep();
    };
  });
