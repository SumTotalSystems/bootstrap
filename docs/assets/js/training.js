angular.module('AngularJSTraining', ['SumTotalComponents']) //jshint ignore:line
  .factory('videoList', ['$q', function ($q) {
    var deferred = $q.defer();
    //video list ends
    var videoList = [
      {
        title: 'Binding',
        description: 'Binding is a core feature of AngularJS. It provides a simple mechanism for integrating your HTML with your data via {{bracketed expressions}}. In this video, John covers the basics of binding to get you started.',
        link: 'Videos/01_EggheadioAngularJSBinding.mp4',
        img: 'Videos/img/01_EggheadioAngularJSBinding.png',
        duration: '2:53',
        files: 'Videos/files/70-ui-router-named-views.7z'
        },
      {
        title: 'Controllers',
        description: 'Controllers are the glue of an AngularJS application. They connect your markup with your data and act as a sort of switchboard. This video is going to take a look at Controllers and introduce the $scope, building on the Binding video.',
        link: 'Videos/02_Eggheadio_AngularJS_Controllers.mp4',
        img: 'Videos/img/02_Eggheadio_AngularJS_Controllers.png',
        duration: '2:13',
        files: ''
        },
      {
        title: 'The Dot',
        description: 'This brief video examines the importance of a single . within your AngularJS application. It uncovers a potential gotcha when it comes to inheritence.',
        link: 'Videos/03_Eggheadio_AngularJS_TheDot.mp4',
        img: 'Videos/img/03_Eggheadio_AngularJS_TheDot.png',
        duration: '3:02',
        files: ''
        },
      {
        title: 'Sharing Data Between Controllers',
        description: 'If AngularJS Controllers are the glue of an application, how do they communicate and pass data around? This introduction to service factories will shed some light on that question.',
        link: 'Videos/04 - Egghead.io - AngularJS - Sharing Data Between Controllers.mp4',
        img: 'Videos/img/04 - Egghead.io - AngularJS - Sharing Data Between Controllers.png',
        duration: '3:19'
        },
      {
        title: 'Defining a Method on the Scope',
        description: 'Armed with Controllers and service factories, you will probably want to do some work on the data to give your app behaviors. In this video we will look at providing that behavior by defining a method on the scope. This method will be bound within the HTML and update live as input changes.',
        link: 'Videos/05 - Egghead.io - AngularJS - Defining a Method on the Scope.mp4',
        img: 'Videos/img/05 - Egghead.io - AngularJS - Defining a Method on the Scope.png',
        duration: '2:16'
        },
      {
        title: 'Filters',
        description: 'Many times while building an AngularJS application you will need to manipulate data, and it doesn not make sense to do it with a Controller method. Luckily you have Filters, which are particularly well suited for manipulating text within your HTML views. This handy tool uses a simple syntax to create highly reusable functionality for your apps.',
        link: 'Videos/06 - Egghead.io - AngularJS - Filters.mp4',
        img: 'Videos/img/06 - Egghead.io - AngularJS - Filters.png',
        duration: '2:19'
        },
      {
        title: 'Testing Overview',
        description: 'Testing is a first class citizen in AngularJS. It is at its heart and soul. This lesson demonstrates using Karma to write a simple unit test for a Filter.',
        link: 'Videos/07_Eggheadio_AngularJS_Testing_Overview.mp4',
        img: 'Videos/img/07_Eggheadio_AngularJS_Testing_Overview.png',
        duration: '5:18'
        },
      {
        title: 'ngRepeat and Filtering Data',
        description: 'When working with sets of data, it is common to need to repeat the same UI element over and over again with values from each object in the set. ngRepeat provides an elegant and simple way to accomplish this within your HTML. We will also provide a filter to a repeater that gives us basic search functionality.',
        link: 'Videos/08 - Egghead.io - AngularJS - ngFilter.mp4',
        img: 'Videos/img/08 - Egghead.io - AngularJS - ngFilter.png',
        duration: '5:13'
        },
      {
        title: 'Built-in Filters',
        description: 'AngularJS comes with several handy filters that you can use out of the box. These filters can be combined to create more complex filtered results.',
        link: 'Videos/09 - Egghead.io - AngularJS - Built-in Filters.mp4',
        img: 'Videos/img/09 - Egghead.io - AngularJS - Built-in Filters.png',
        duration: '2:13'
        },
      {
        title: 'First Directive',
        description: 'Directives might just be the killer feature of AngularJS. Directives allow us to extend the grammar of the web through reusable HTML elements, attributes, and classes.',
        link: 'Videos/10 - Egghead.io - AngularJS - First Directive.mp4',
        img: 'Videos/img/10 - Egghead.io - AngularJS - First Directive.png',
        duration: '2:08'
        },
      {
        title: 'Directive Restrictions',
        description: 'By default AngularJS directives can be used with elements, attributes, classes, and comments. Many times we want to restrict it to one or more of those to control how a directive will be used. This lesson digs into how and why to use Directive restrictions.',
        link: 'Videos/11 - Egghead.io - AngularJS - Directive Restrictions.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:01'
        },
      {
        title: 'Basic Behaviors',
        description: 'Bring your directives to life with custom behaviours. This is the recommended way of interacting with the DOM in AngularJS. If you find yourself modifying the DOM inside of your controllers (bad), directive behaviours are your solution (awesome).',
        link: 'Videos/12 - Egghead.io - AngularJS - Basic Behaviors.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:29'
        },
      {
        title: 'Useful Behaviors',
        description: 'When you define a directive you get access to the attrs object by declaring it as a dependency in the link function. The attrs object will contain the normalized attributes and their corresponding values declared on the element which contains the directive in the html. So if you set a value on your directive attribute (myDirective="value"), you can access this value in your directive configuration by accessing attrs.myDirective, as this contains the value set in the html for myDirective.',
        link: 'Videos/13 - Egghead.io - AngularJS - Useful Behaviors.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:55'
        },
      {
        title: 'Directives Talking to Controllers',
        description: 'Often in AngularJS we want to share information between controllers and directives. One way to do this is by passing the scope, but this makes the directive reliant on the scope having the methods you want to run. This lesson shows you a cleaner way that you can pass methods to the directive using an attribute and decouple controllers from directives. This in turn makes your directives more generic/reusable.',
        link: 'Videos/14 - Egghead.io - AngularJS - Directives Talking to Controllers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:43'
        },
      {
        title: 'Directive to Directive Communication',
        description: 'In Angular JS, you can use one directive as an element and other directives as attributes to the element, allowing you to specify different functionality for elements based on the attributes in the element. This lesson shows you how to take a group of directive elements and give them each unique functionality based on their directive attributes.',
        link: 'Videos/15 - Egghead.io - AngularJS - Directive to Directive Communication.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:01'
        },
      {
        title: 'Understanding Isolate Scope',
        description: 'By adding an isolated scope object to your AngularJS directive you can insure that each element using that directive has its own scope. This prevents it from affecting sibling directives and encapsulates the directive.',
        link: 'Videos/16 - Egghead.io - AngularJS - Understanding Isolate Scope.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:38'
        },
      {
        title: 'Isolate Scope "@"',
        description: 'AngularJS isolate scopes can be a bit cryptic when you are first starting out. In this lesson, John looks at the attribute or "@" designator in your isolate scopes.',
        link: 'Videos/17 - Egghead.io - AngularJS - Isolate Scope attribute.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:51'
        },
      {
        title: 'Isolate Scope "="',
        description: 'Perhaps the most useful of the isolate scope binding methods, this episode talks about the use of "=" for two way binding within your directives.',
        link: 'Videos/18 - Egghead.io - AngularJS - Isolate Scope two way.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:51'
        },
      {
        title: 'Isolate Scope "&"',
        description: 'The "&" in your isolated scopes within your AngularJS application will allow you to invoke a method within the scope that your directive lives in.',
        link: 'Videos/19 - Egghead.io - AngularJS - Isolate Scope expression.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:03'
        },
      {
        title: 'Isolate Scope Review',
        description: 'A review of the three types of isolate scope binding methods in AngularJS. The "@" operator is used for reading an attribute, "=" is used for creating a bi-directional two way binding, and "&" is used to make a call on something a controller scope.',
        link: 'Videos/20 - Egghead.io - AngularJS - Isolate Scope Review.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:30'
        },
      {
        title: 'Transclusion Basics',
        description: 'Uh oh. Transclusion? What the heck? It is a big word, but it is actually a very simple concept. In this episode John shows you how transclusion is used in your AngularJS directives...',
        link: 'Videos/21 - Egghead.io - AngularJS - Transclusion Basics.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:48'
        },
      {
        title: 'An Alternative Approach to Controllers',
        description: 'AngularJS makes your HTML very declarative. However, seeing the functions invoked in your HTML may not offer any clues as to what controller defines said functions. This video offers an approach to solving this problem by returning the controller in the controller definition so that we can opt for something like ng-click="SomeCtrl.doesSomething()" instead of simply writing ng-click="doesSomething()".',
        link: 'Videos/22 - Egghead.io - AngularJS - An Alternative Approach to Controllers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:49'
        },
      {
        title: 'Thinking Differently About Organization',
        description: 'Demonstrates an “outside the box” approach to organizing controllers and directives by collecting them into objects and them passing those object to AngularJS.',
        link: 'Videos/23 - Egghead.io - AngularJS - Thinking Differently About Organization.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:22'
        },
      {
        title: 'Building Zippy',
        description: 'Building a demo AngularJS directive named Zippy using ng-model, ng-click and transclusion (no controller)',
        link: 'Videos/24 - Egghead.io - AngularJS - Building Zippy.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:55'
        },
      {
        title: 'angular.element',
        description: 'A brief overview of using element in an AngularJS directive, and how to target one without jquery, and also how to use replace and compile function',
        link: 'Videos/25 - Egghead.io - AngularJS - angular.element.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:40'
        },
      {
        title: '$scope vs. scope',
        description: 'This episode is explaining the naming conventions behind for the arguments passed to the factory functions for controllers, directives, linking functions, etc., its implications in regard to Angular’s dependency injection, minification side effects on arguments, and how to prevent them.',
        link: 'Videos/26 - Egghead.io - AngularJS - scope vs scope.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '9:14'
        },
      {
        title: 'templateUrl',
        description: 'If you want to keep your template code in a separate html file, you can use the templateUrl property to tell Angular where to find it.',
        link: 'Videos/27 - Egghead.io - AngularJS - templateUrl.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:45'
        },
      {
        title: '$templateCache',
        description: 'An alternative to inject an AngularJS template by using $templateCache, using .get() and .put() methods',
        link: 'Videos/28 - Egghead.io - AngularJS - templateCache.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:07'
        },
      {
        title: 'ng-view',
        description: 'AngularJS\'s ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (typically the index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.',
        link: 'Videos/29 - Egghead.io - AngularJS - ng-view.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:03'
        },
      {
        title: 'The config function',
        description: 'This episode explains the config phase of an AngularJS application and how is it special in regards to $routeProvider (routing configuration) and providers in general.',
        link: 'Videos/30 - Egghead.io - AngularJS - The config function.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:55'
        },
      {
        title: '$routeProvider api',
        description: 'AngularJS\'s $routeProvider has a very basic api for defining your application\'s routes. $routeProvider.when() is used to match a url pattern to a view while $routeProvider.otherwise() is used to render a view when there is no match to a url pattern.',
        link: 'Videos/31 - Egghead.io - AngularJS - routeProvider api.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:50'
        },
      {
        title: '$routeParams',
        description: 'John continues to dive into routing in AngularJS using ng-view. He provides some simple examples for passing in path parameters using $routeParams.',
        link: 'Videos/32 - Egghead.io - AngularJS - routeParams.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:14'
        },
      {
        title: 'redirectTo',
        description: 'In AngularJS redirectTo is often assigned a simple static string and thus points invariably to one location (redirectTo: \'/mypath\'). You can customize this, by setting redirectTo as a function, which arguments are the route params. For instance, if you hit the route "/pizza/peperoni", you can compose your redirection to be "/pizzas", or whatever suits your needs',
        link: 'Videos/33 - Egghead.io - AngularJS - redirectTo.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:45'
        },
      {
        title: 'Promises',
        description: 'An AngularJS promise is a mechanism that lets you defer a stated action or series of actions at an earlier point of time until you explicitly declare that promise to be fulfilled (or resolved). Promises are useful for asynchronous operations. This video introduces the basic way to declare and resolve promises.',
        link: 'Videos/34 - Egghead.io - AngularJS - Promises.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:03'
        },
      {
        title: 'Resolve',
        description: 'This video shows how the AngularJS \'resolve\' feature can be used during the config phase before your controller has been instantiated. This gives you the opportunity to ensure everything has been setup properly that your controller depends on, thus allowing your controller to execute safely based on its assumptions.',
        link: 'Videos/35 - Egghead.io - AngularJS - Resolve.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:05'
        },
      {
        title: 'resolve conventions',
        description: 'This video shows a more generalized way of using the AngularJS resolve feature with controllers to organize the conditions before the controller is instantiated. The video shows how to condition the controller\'s instantiation on more than one set of actions (function), and even pass values from the condition processing into the controller\'s scope once it gets instantiated.',
        link: 'Videos/36 - Egghead.io - AngularJS - resolve conventions.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:23'
        },
      {
        title: 'resolve $routeChangeError',
        description: 'We can intercept a route change error and direct the user to an appropriate page.',
        link: 'Videos/37 - Egghead.io - AngularJS - resolve routeChangeError.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:09'
        },
      {
        title: 'Directive for Route Handling',
        description: 'Use AngularJS $rootScope within a directive to detect route change errors and display it to the user.',
        link: 'Videos/38 - Egghead.io - AngularJS - Directive for Route Handling',
        img: 'Videos/img/AngularJS.png',
        duration: '3:02'
        },
      {
        title: 'Route Life Cycle',
        description: 'In this lesson the the route life cycle, John steps through the AngularJS Route life cycle using the routeChangeStart and routeChangeSuccess events. By inspecting the current and previous objects, we can see Angular\'s awareness of the previous route and controller as well as the current or targeted route and controller. Through the use of the resolve property, the routeChangeSuccess event will be delayed until the promise has been completed.',
        link: 'Videos/39 - Egghead.io - AngularJS - Route Life Cycle.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:24'
        },
      {
        title: 'Providers',
        description: 'This lesson describes what is really happening when you use the angular factory and how you can make your factories even more dynamic in creation. This gets further into the internals of AngularJS by showing you how a factory is built dynamically for you and how they have reduced the plumbing you need to make applications.',
        link: 'Videos/40 - Egghead.io - AngularJS - Providers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:06'
        },
      {
        title: 'Injectors',
        description: 'Injectors inject your dependencies in your AngularJS application. For the most part it will automatically work when constructing objects (controllers) and provide the dependencies defined with your service/factory/provider, it can also be injected itself and be used for invoking methods with injection.',
        link: 'Videos/41 - Egghead.io - AngularJS - Injectors.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:55'
        },
      {
        title: 'Components and Containers',
        description: 'This lesson describes fundamentals for creating custom directives (broken down into Components and Containers). The component demonstrates how to use the service template to create a simple clock directive whereby AngularJS will bind with objects in the template property and access element attributes. The component example will provide a demonstration of how you can nest components and containers, taking advantage of AngularJS transclusion capabilities.',
        link: 'Videos/42 - Egghead.io - AngularJS - Components and Containers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:27'
        },
      {
        title: 'ng-repeat and $index, $event, $log',
        description: '$index and $event are handy shortcuts that allow you to access useful information directly in your views. $log facilitates configurable logging without using console.log directly.',
        link: 'Videos/43 - Egghead.io - AngularJS - index event log.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:48'
        },
      {
        title: 'Experimental "Controller as" Syntax',
        description: 'The "controller as" syntax was added to AngularJS 1.2. This syntax abstracts the use of $scope in controllers, simplifying the syntax of your controllers.',
        link: 'Videos/44 - Egghead.io - AngularJS - Experimental controller as Syntax.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:20'
        },
      {
        title: 'Directive Communication',
        description: 'In AngularJS, hierarchical directives have the ability to communicate with one another via their defined controllers. With simple syntax/notation you are able to define links between directives and their controllers.',
        link: 'Videos/45 - Egghead.io - AngularJS - Directive Communication.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:28'
        },
      {
        title: 'ngmin',
        description: 'ng-min removes the headache of needing to associate strings with parameter names for minified AngularJS code.',
        link: 'Videos/46 - Egghead.io - AngularJS - ngmin.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:28'
        },
      {
        title: 'ng-repeat-start',
        description: 'This short video tutorial looks at the ng-repeat-start and ng-repeat-end elements added in AngularJS 1.2',
        link: 'Videos/47 - Egghead.io - AngularJS - ng-repeat-start.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:26'
        },
      {
        title: 'animation basics',
        description: 'Angular 1.2 introduces new animation functionality. This episode looks at the very basics of getting the animation module loaded and using it to create your first simple animation with CSS.',
        link: 'Videos/48 - Egghead.io - AngularJS - animation basics.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:52'
        },
      {
        title: 'Animating with JavaScript',
        description: 'In this lesson John looks at how to integrate the popular TweenMax library with ngAnimate to get animation effects in an AngularJS application.',
        link: 'Videos/49 - Egghead.io - AngularJS - Animating with JavaScript.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:45'
        },
      {
        title: 'Animating the Angular Way',
        description: 'In this episode John uses TweenMax to add animations to AngularJS. Instead of manipulating DOM directly in a controller, we will use an AngularJS directive to abstract that view logic cleanly using $animate',
        link: 'Videos/50 - Egghead.io - AngularJS - Animating the Angular Way.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:53'
        },
      {
        title: 'angular.copy',
        description: 'In this episode John takes a look at angular.copy and how you can use it for non-destructive form editing. Instead of binding to a value directly, we make a deep copy of that object and bind to the copy for presentation. Updates to the data are then "saved" to the original object to persist changes.',
        link: 'Videos/51 - Egghead.io - AngularJS - angular.copy.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:09'
        },
      {
        title: 'Introduction to ui-router',
        description: 'In his debut egghead.io lesson, Joel will show you how to get setup and running with ui-router, an alternative to AngularJS\'s default routing module.',
        link: 'Videos/52 - Egghead.io - AngularJS - Introduction to ui.router.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:35'
        },
      {
        title: 'Using angular.bootstrap to Initialize Your App',
        description: 'In this lesson, John shows you how to use angular.bootstrap as an alternative approach to initializing your application without using ng-app.',
        link: 'Videos/53 - Egghead.io - AngularJS - angular.bootstrap.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:13'
        },
      {
        title: 'No Custom Markup',
        description: 'Extending the semantics of HTML is one of the core features of AngularJS, however, you can use AngularJS without any custom markup.',
        link: 'Videos/54 - Egghead.io - AngularJS - no_custom_markup.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:39'
        },
      {
        title: 'Unit Testing "Hello World"',
        description: 'This brief intro to unit testing with AngularJS takes a look at how to configure a test, compile an element, and access AngularJS within your tests.',
        link: 'Videos/55 - Egghead.io - AngularJS - Unit Testing Hello World.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:26'
        },
      {
        title: 'Unit Testing a Directive',
        description: 'In this lesson you will unit test a simple AngularJS directive',
        link: 'Videos/56- Egghead.io - AngularJS - Unit Testing an AngularJS Directive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:14'
        },
      {
        title: 'Unit Testing Directive Scope',
        description: 'Unit test your AngularJS directives that make changes to $scope as well as their own isolated scopes.',
        link: 'Videos/57 - Egghead.io - AngularJS - Unit Testing Directive Scope.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:57'
        },
      {
        title: 'Unit Testing Directive Scope Binding',
        description: 'Digging a little deeper into unit testing an AngularJS directive, this lesson looks at testing binding across multiple scopes.',
        link: 'Videos/58 - Egghead.io - AngularJS - Testing Directive Scope Binding.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:00'
        },
      {
        title: 'Testing Underscores',
        description: 'AngularJS injectors understand aliased for core injectables such as $rootScope in unit tests. If you surround your injected object with underscores _$rootScope_ it will be understood and injected into your test by Angular. This allows you to use a local alias of the same name.',
        link: 'Videos/59 - Egghead.io - AngularJS - Testing Underscores.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:27'
        },
      {
        title: 'Speed Testing with WebStorm and Jasmine',
        description: 'In this lesson John shows some tricks for speeding up your test suite. He digs into some handy features of WebStorm, including the ddescriber plugin, as well as some alternative methods for Jasmine for selectively running your tests.',
        link: 'Videos/60 - Egghead.io - AngularJS - Speed Testing.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:20'
        },
      {
        title: 'Testing a Service',
        description: 'Using Jasmine, this lesson will look at testing an AngularJS service.',
        link: 'Videos/61 - Egghead.io - AngularJS - Testing a Service.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:08'
        },
      {
        title: 'Testing a Controller',
        description: 'AngularJS provides helpers for convenient testing of your application. In this lesson you will learn how to test a basic controller with Jasmine and Angular.',
        link: 'Videos/62 - Egghead.io - AngularJS - Testing a Controller.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:12'
        },
      {
        title: 'Design Patterns: Mixin',
        description: 'AngularJS supports "mixins" with angular.extend, but this approach has some drawbacks. In this video Brett takes a look at a more robust approach to mixins inspired by the Ruby programming language.',
        link: 'Videos/63 - Egghead.io - AngularJS - Design Patterns- Mixins.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:50'
        },
      {
        title: '$http',
        description: 'In this lesson, John covers the use of AngularJS\'s $http service for making requests and handling responses from external web services',
        link: 'Videos/64 - Egghead.io - AngularJS - $http.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:05'
        },
      {
        title: 'Design Pattern: Simple Mediator',
        description: 'In this video Brett shows us how to create a simple mediator for cleanly separating concerns within your application. This is the first in a series that will build a robust, fully tested mediator for events in your AngularJS application.',
        link: 'Videos/65 - Egghead.io - AngularJS - Simple Mediator.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:23'
        },
      {
        title: 'transformResponse',
        description: 'In his debut lesson, Trevor test drives the transformation of a response from an external REST service using the the transformResponse option of AngularJS\'s $http service.',
        link: 'Videos/66 - Egghead.io - AngularJS - transformResponse.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:01'
        },
      {
        title: 'Chained Promises',
        description: 'Promises are a fantastic tool in AngularJS. Many times, as you start to chain them together, they become ugly and unwieldy. In this lesson, Thomas will show you an approach for breaking your chained promises down into a flat, clean, readable structure.',
        link: 'Videos/67 - Egghead.io - AngularJS - Promise Chains.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:07'
        },
      {
        title: '$provide.decorator',
        description: 'In this lesson Brett will show you how to use $provide.decorator to cleanly add functionality to AngularJS services and keep your concerns wonderfully separated.',
        link: 'Videos/68 - Egghead.io - AngularJS - $provide.decorator.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:41'
        },
      {
        title: 'transformRequest',
        description: 'In this lesson Trevor will show you how to transform your requests using AngularJS\'s $http service\'s transformRequest option and TDD. This allows you to keep your applications domain clean when integrating with third party APIs.',
        link: 'Videos/69 - Egghead.io - AngularJS - transformRequest.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:16'
        },
      {
        title: 'ui-router Named Views',
        description: 'The ui-router library for AngularJS provides the ability to name views within your application. This is useful for dividing up your application into sections, and changing the content of a section based on the current state.',
        link: 'Videos/70-ui-router-named-views.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:38'
        },
      {
        title: 'Getting Started With Protractor',
        description: 'Protractor is an end-to-end testing library for AngularJS. This video lesson will walk through getting Protractor installed and writing your first test.',
        link: 'Videos/71 - Egghead.io - AngularJS - Getting Started With Protractor.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:25'
        },
      {
        title: 'Testing Controllers With Dependencies',
        description: 'In this lesson Trevor looks at testing AngularJS controllers with scope inheritance with Jasmine and test spies.',
        link: 'Videos/72 - Egghead.io - AngularJS - Testing Controllers With Dependencies.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:40'
        },
      {
        title: 'Accessing Data in HTML',
        description: 'In this lesson, John will take you from bad practices to good practices, as he explores how to bring data into your HTML templates with AngularJS. You\'ll go from attaching data directly to the $rootScope in your Angular module run block (bad!) all the way through using promises to asynchronously assign data to your controller and access it with "controller-as" syntax (much better!).',
        link: 'Videos/73 - Egghead.io - AngularJS - Accessing Data in HTML.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:05'
        },
      {
        title: 'Test Simple Binding With Protractor',
        description: 'Protractor is built to interact with AngularJS applications. In this lesson, we will take a look at how Protractor interacts with the application using its element and finder functions.',
        link: 'Videos/74 - Egghead.io - AngularJS - Test Simple Binding With Protractor.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:24'
        },
      {
        title: '$q.all',
        description: 'Orchestrating the handling of multiple promises in AngularJS is simple if you take advantage of $q.all. Using $q.all will take your promises, wait until they have all resolved and return the result of all the promises as an ordered array.',
        link: 'Videos/75 - Egghead.io - AngularJS - $q.all.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:35'
        },
      {
        title: 'Inject Jasmine Spies With $provide',
        description: 'One of the beautiful things about dependency injection in your AngularJS apps is the ability to replace dependencies in your unit tests. In this lesson Trevor looks at how to configure Jasmine spies as injectable replacements for dependencies for testing.',
        link: 'Videos/76 - Egghead.io - AngularJS - Inject Jasmine Spies with $provide.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:49'
        },
      {
        title: '$interval',
        description: '$interval provides an excellent service for timed operations in your AngularJS apps. It has the advantage over setInterval in "normal" Javascript in that it is aware of Angular\'s view cycles, as well as being mockable for unit tests. Additionally, it returns a promise and provides a lot of flexibility.',
        link: 'Videos/77 - Egghead.io - AngularJS - $interval.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:36'
        },
      {
        title: 'Testing With Protractor Page Objects',
        description: 'Protractor Page Objects are a recommended for testing your AngularJS applications. Page Objects abstract the interaction between the browser and your functional tests, resulting in much cleaner tests.',
        link: 'Videos/78 - Egghead.io - AngularJS - Testing With Protractor Page Objects.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:28'
        },
      {
        title: 'Application Wiring: JQuery vs AngularJS',
        description: 'You can build single page applications with JQuery and/or AngularJS. In this lesson, John will look at some of the fundamental differences between the two approaches.',
        link: 'Videos/79 - Egghead.io - AngularJS - Application Wiring- JQuery vs AngularJS.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:08'
        },
      {
        title: 'Using $resource for Data Models',
        description: 'AngularJS\'s $resource service allows you to create convenience methods for dealing with typical RESTful APIs. In this video, Brett will show you the basics of using $resource, as well as talking about some of the drawbacks with using this service for your data models.',
        link: 'Videos/80 - Egghead.io - AngularJS - Using $resource for Data Models.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:29'
        },
      {
        title: 'Custom Jasmine Matchers',
        description: 'Custom Jasmine Matchers are a great way to keep your AngularJS Unit Tests clean and tidy. We want to make expectations readable and express the intent of the test. Custom matchers help to accomplish this.',
        link: 'Videos/81-custom-jasmine-matchers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:30'
        },
      {
        title: 'Accessing Scope from The Console',
        description: 'The Chrome Dev Tools console is an amazing tool. In this lesson you\'ll learn how to use the console to programmatically grab scopes in your AngularJS application.',
        link: 'Videos/82 - Egghead.io - AngularJS - Accessing the Scope From Console.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:40'
        },
      {
        title: 'Accessing Services from Console',
        description: 'Using the Chrome console, you can access your AngularJS injectable services. This is down and dirty debugging, and can be a lifesaver in troubling times.',
        link: 'Videos/83 - Egghead.io - Accessing Services via Console.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:39'
        },
      {
        title: 'HTML with ngSanitize and SCE',
        description: 'Safely render arbitrary HTML snippets by using ngSanitize and $sce.',
        link: 'Videos/84-html-ng-sanitize-sce.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:02'
        },
      {
        title: 'Build a Debug Directive',
        description: 'Explore some interesting techniques with AngularJS directives to create a debug directive using termination, priority, and the $compile service.',
        link: 'Videos/85 - Egghead.io - AngularJS - Build a Debug Directive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:00'
        },
      {
        title: 'Create a Model Base Class',
        description: 'You\'re going to test drive the creation of a robust model layer for an AngularJS application. To get started, we need a solid base class to encapsulate common functionality. In this lesson you\'ll use Javascript\'s prototypical inheritance to create the model base class.',
        link: 'Videos/86-create-model-base-class.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:12'
        },
      {
        title: 'Directive with Transcluded Elements',
        description: 'Create a wrapWith directive using advanced transclusion techniques.',
        link: 'Videos/87 - Egghead.io - AngularJS - Directive with Transcluded Elements.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:46'
        },
      {
        title: 'File Uploads',
        description: 'The file input type is missing from the ng-model directive, so you need to "roll your own" solution for file uploads with AngularJS.',
        link: 'Videos/88-file-uploads.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:42'
        },
      {
        title: 'Model Caching',
        description: 'Build a simple caching mechanism for your AngularJS data models.',
        link: 'Videos/89 - Egghead.io - AngularJS - Model Caching.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:34'
        },
      {
        title: 'Create a Scope Decorator',
        description: 'Using Aspect Oriented Programming (AOP) techniques, you can easily decorate AngularJS controller methods to add additional behaviors. This can be useful for handling analytics and other common concerns in a typical application.',
        link: 'Videos/90-create-a-scope-decorator.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:30'
        },
      {
        title: 'Add Caching to the Model Base Class',
        description: 'In the previous lessons we created a base class and looked at a caching mechanism for our models. In this lesson we will expand on that concept by test driving the addition of caching to our model base class, as well as some initial core functionality. This is advanced subject matter, and will require study of the code as well as watching the video.',
        link: 'Videos/91-add-caching-model-base-class.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:58'
        },
      {
        title: 'Build Your Own ng-controller Directive',
        description: 'Have you ever wanted to write your own ng-controller directive? No?! That probably means you\'re sane. That said, it is an interesting study to lift the lid on the black box, and understand how your tools work on a more intimate level.',
        link: 'Videos/92 - Egghead.io - AngularJS - Build Your Own ng-controller Directive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:20'
        },
      {
        title: 'Compile Pre and Post Link',
        description: 'The typical function you use when creating a directive is the post link function with the signature function (scope, element, attributes) {}. You can also make use of the pre link function for finer grained control of the initialization of your directive.',
        link: 'Videos/93 - Egghead.io - AngularJS - Compile pre and post link.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:53'
        },
      {
        title: 'Rails Todo API Part 1',
        description: 'Rails makes an excellent choice for delivering data to AngularJS via REST apis. In this first lesson of a two part series, you\'ll see how to create a simple API for CRUD operations on TODOs using Rails. This isn\'t an introduction to Rails, and assumes you know the basics. We highly recommend the excellent Rails Tutorial if you\'d like an in depth beginners course in Rails.',
        link: 'Videos/94 - Egghead.io - AngularJS - Rails Todo API.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:49'
        },
      {
        title: 'Rails Todo API Part 2',
        description: 'Expanding on Part 1, this lesson will look at how to bootstrap AngularJS in a rails application as part of the asset pipeline. With Angular available, you\'ll see how to communicate with the Rails API using $resource.',
        link: 'Videos/95-rails-todo-api-part-2.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:25'
        },
      {
        title: 'Advanced Filtering with the Filter Filter',
        description: 'We\'ve all seen the Filter Filter demos/tutorials. You probably aren\'t harnessing its full potential. This lesson will dive deep into the Filter Filter, and how we can use it more effectively.',
        link: 'Videos/96-advanced-filtering.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:51'
        },
      {
        title: 'Get Started with Firebase and AngularFire',
        description: 'Firebase provides a real-time syncing backend for your AngularJS applications in very few lines of code. In this lesson, you\'ll learn how to get started integrating it into your app.',
        link: 'Videos/97 egghead-get-started-with-firebase-angularfire.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:10'
        },
      {
        title: 'Updating Real-Time Data with Firebase Forge',
        description: 'The Firebase Forge provides a convenient GUI for visualizing and manipulating your data in real-time. Be sure to check out this lesson for getting Firebase setup.',
        link: 'Videos/98-egghead-inspect-your-realtime-data-with-firebase-forge.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:53'
        },
      {
        title: 'Firebase Event Handling',
        description: 'When using Firebase collections in your AngularJS application, you have access to a handy set of events emitted by the collection when changes in your data occur. Be sure to check out the first lesson in this series for the project source code.',
        link: 'Videos/99-egghead-firebase-events-in-angularjs.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:25'
        },
      {
        title: 'Using $anchorScroll',
        description: 'John clears up the concept of "anchorScroll", the default behavior of scrolling to anchors, and how to override and implement your own custom behavior.',
        link: 'Videos/100-201404011254_anchorScroll.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:04'
        },
      {
        title: 'Write Your First Directive',
        description: 'Write your very first directive! This lesson will show you how to declare a directive, and start using the "link" function to modify the behavior of an HTML element.',
        link: 'Videos/101-egghead-angularjs-write-your-first-directive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:46'
        },
      {
        title: 'First Step: Adding Angular to the HTML Page',
        description: 'The first step to any AngularJS project, is actually adding AngularJS to the page. This lesson will show you adding the Angular script, initializing the app with ng-app, and simple two way binding with ng-model. This is a beginner level lesson.',
        link: 'Videos/102-egghead-adding-angularjs.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:51'
        },
      {
        title: 'Firebase Basic Authentication Part 1',
        description: 'Firebase has several ways to provide authentication for your AngularJS application. In this lesson, Lukas will look at the most basic email/password approach.',
        link: 'Videos/103-egghead-firebase-login-pt1.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:09'
        },
      {
        title: 'JavaScript Function Scope and $scope',
        description: 'How does AngularJS $scope relate to JavaScript function scope?',
        link: 'Videos/104-angular-scope-basics.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:57'
        },
      {
        title: 'Firebase Basic Authentication Part 2',
        description: 'Authenticating with Firebase creates a 24 hour session for the user. This allows you to fetch the current session for the user, as well as logout the user and destroy the session.',
        link: 'Videos/105-egghead-firebase-login-pt2.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:22'
        },
      {
        title: 'Search Directive with Rails',
        description: 'Create a search directive with AngularJS and Rails. You\'ll want to take a look at the related Rails TODO API Part 1 and Rails TODO API Part 2. This is not a Rails how-to, so some knowledge there is expected to get up and running.',
        link: 'Videos/106-search-directive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:35'
        },
      {
        title: ' Basic Animation with Greensock\'s TweenMax',
        description: 'Greensock is a powerful animation library for JavaScript. It\'s also fully compatible with AngularJS. This lesson will get you started using Greensock with AngularJS to provide rich animations for your users.',
        link: 'Videos/107-egghead-greensock-intro-animation.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:20'
        },
      {
        title: '3d Animations with Greensock TweenLite',
        description: 'AngularJS animations and TweenLite make it really easy to create cool 3d effects in your application.',
        link: 'Videos/108-egghead-greensock-3d-animation.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '6:52'
        },
      {
        title: 'Multiple HTTP Requests with $q',
        description: 'In AngularJS, multiple HTTP requests can be coordinated with $q.all, making your project\'s code cleaner and more testable.',
        link: 'Videos/109-egghead-angularjs-multiple-http-requests.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:06'
        },
      {
        title: 'Firebase Data Relationships',
        description: 'Data has relationships, and Firebase allows you to define those relationships in your AngularJS applications..',
        link: 'Videos/110-egghead-firebase-relationships.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '10:33'
        },
      {
        title: 'Refactor The Model Base Class with Mixins',
        description: 'We\'ve built a base class that is starting to sprawl, and now we want to unit test and refactor out the caching logic into a mixin that will handle this functionality. This lesson is part of a series..',
        link: 'Videos/111-egghead-angularjs-data-modeling-refactor-base-class.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '11:20'
        },
      {
        title: 'Model Validation Design Review',
        description: 'We want robust validation for our AngularJS models. This will require a bit of forethought, and this lesson will examine the goals that we have for the validation piece of our model library..',
        link: 'Videos/112-angular-js-data-modeling-validation-design-review.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '7:31'
        },
      {
        title: 'Basic Implementation of Configurable Validations',
        description: 'With the roadmap set, we will start to implement configurable validations for our Models..',
        link: 'Videos/113-egghead-angular-js-basic-configurable-validators.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '9:08'
        },
      {
        title: 'Greensock TimelineLite Animation Sequences',
        description: 'TimelineLite is a piece of the Greensock TweenMax library that provides the ability to create sequenced animation with very little code or setup.',
        link: 'Videos/114-egghead-greensock-timeline.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '10:18'
        },
      {
        title: 'Adding Child Validators',
        description: 'To make our AngularJS data model validation more robust, we want the ability to make complex validators that have child validators.',
        link: 'Videos/115-egghead-angularjs-modeling-child-validators.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '9:30'
        },
      {
        title: 'Validations Class',
        description: 'Now we bring the validations together with a Validations class.',
        link: 'Videos/116-egghead-angularjs-modeling-validations-class.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:16'
        },
      {
        title: 'Mixing in Validatable',
        description: 'Now that the validation component has progressed, we can start mixing it in for usage. This video is a part of a series, you\'ll want to watch the earlier lessons before this one.',
        link: 'Videos/117-010-mixing-in-validatable.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '12:07'
        },
      {
        title: 'Errorable Mixin',
        description: 'Now that we have validations, we will want to be able to provide the user feedback on the errors in models. This is useful for forms, and is a critical part of the validation process. This lesson is part of a series!',
        link: 'Videos/118-egghead-models-11-errorable-mixin.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '11:08'
        },
      {
        title: 'Using ngModel in Custom Directives',
        description: 'You can use ngModel in your own directives, but there are a few things you\'ll need to do to get it working properly.',
        link: 'Videos/119-01_ngModelController_basics.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:42'
        },
      {
        title: 'CodeSchool Refactor - Reusable Directives Part 1/2',
        description: 'In collaboration with CodeSchool, John refactors pieces of the CodeSchool Angular app into a more reusable directives.',
        link: 'Videos/120-reusable_directives.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '5:47'
        },
      {
        title: 'CodeSchool Refactor - Flexible Directives Part 2/2',
        description: 'In collaboration with CodeSchool, John takes the reusable directives from the previous video and works them into more flexible and easy to use directives.',
        link: 'Videos/121-flexible_directives.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '14:25'
        },
      {
        title: 'Finishing Validatable',
        description: 'We can now finalize the Validatable piece of our data modeling library. This lesson is part of a series. Be sure to watch the previous lessons to fully understand what is going on!',
        link: 'Videos/121-flexible_directives.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '13:13'
        },
      {
        title: 'ngModelController: viewValue-modelValue relationship',
        description: 'This lesson takes a look at the AngularJS internals to better understand what Angular is doing under the hood with ngModel to keep data and views in sync.',
        link: 'Videos/122-02_ngModelController_viewValue_modelValue.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:20'
        },
      {
        title: 'Introduction to Grunt for Angular',
        description: '123-1-Intro to Grunt',
        link: 'Videos/123-1-Intro to Grunt.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:19'
        },
      {
        title: 'ngModelController render function',
        description: 'When implementing ng-model on your reusable AngularJS directives, you need to implement the render function.',
        link: 'Videos/124-03_ngModelController_render.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:04'
        },
      {
        title: 'Protractor Interactive',
        description: 'Did you know that Protractor has a handy interactive mode to help with writing/debugging your end-to-end (e2e) tests?',
        link: 'Videos/125-protractor_interactive.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:44'
        },
      {
        title: 'ui-router: Activating States',
        description: 'The ui-router library for AngularJS provides several options for navigating between states in your application. You can navigate via the browser\'s URL bar, programatically with $state.go, and with the ui-sref directive on your HTML elements.',
        link: 'Videos/126-01-egghead-ui-router-activating-states.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:04'
        },
      {
        title: 'caching with $http',
        description: 'By default your HTTP requests with the $https service in Angular are not cached. By setting some options, you can turn caching on.',
        link: 'Videos/127-http_caching.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:17'
        },
      {
        title: 'Protractor: Running tests on multiple browsers',
        description: 'Testing your AngularJS application on multiple browsers is important, and Protractor offers this ability through the multiCapabilities configuration option. Learn how to use this option, as well as configure your e2e tests to run on only a single browser for rapid development.',
        link: 'Videos/129-egghead-angularjs-protractor-running-on-multiple-browsers.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '8:12'
        },
      {
        title: '$apply vs $digest',
        description: '$apply and $digest are both methods on AngularJS scopes that allow you to manually trigger the updates to bound properties on your scopes.',
        link: 'Videos/130-egghead-angularjs-apply-v-digest.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '2:25'
        },
      {
        title: 'Directive Definition Object (DDO)',
        description: 'Directive Definition Objects are used to configure AngularJS directives. Be sure to check out our Directive Definition Object Cheat Sheet.',
        link: 'Videos/131-directive_definition_object.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '1:19'
        },
      {
        title: 'Using Protractor to Test Mobile Safari with Appium',
        description: 'When running end-to-end tests with Protractor for your AngularJS applications, you\'ll want to test mobile as well. Appium helps make that happen.',
        link: 'Videos/132-egghead-angular-protractor-mobile-safari-with-appium.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '4:57'
        },
      {
        title: 'Debounce (delay) User Input in AngularJS with Lodash',
        description: 'Lodash has an enormous amount of utility functions for dealing with collections and objects in javascript. You can use it in your AngularJS applications to "debounce" user input, or add delay between user actions. This is a common technique for text input to hold firing service calls until the user stops typing for a fraction of a second.',
        link: 'Videos/133 - egghead-angularjs-lodash-debounce-user-input.mp4',
        img: 'Videos/img/AngularJS.png',
        duration: '3:42'
        }
    ];
    //video list ends

    deferred.resolve(videoList);

    return deferred.promise;
}])

.controller('videoController', ['$scope', '$q', 'videoList', 'ngTableParams', function ($scope, $q, videoList, ngTableParams) {

    $scope.videos = null;

    $scope.tableParams = new ngTableParams({
      page: 1, // show first page
      count: 10 // count per page
    }, {
      total: 0, // length of data
      getData: function ($defer, params) {
        if (!$scope.videos) {
          videoList.then(function (videos) {

            $scope.videos = videos;

            params.total($scope.videos.length);

            var pageData = $scope.videos.slice((params.page() - 1) * params.count(), params.page() * params.count());
            $defer.resolve(pageData);
          });
        } else {
          var pageData = $scope.videos.slice((params.page() - 1) * params.count(), params.page() * params.count());
          $defer.resolve(pageData);
        }
      }
    });

    $scope.selectionChanged = function (selectedVideo) {
      _.forEach($scope.videos, function (video) {

        video.$selected = false;
      })
    };
}])
  .directive("vidplay", function () {
    return function (scope, element, attrs) {
      restrict: "A",
      element.bind("click", function () {
        var video = document.getElementById(attrs.id);
        //var button = document.getElementById("play");
        if (video.paused) {
          video.play();
          //  button.textContent = "||";
        } else {
          video.pause();
          //   button.textContent = ">";
        }

      })
    }
  });
