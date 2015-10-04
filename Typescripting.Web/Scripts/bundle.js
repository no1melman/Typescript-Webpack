webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/tsd.d.ts" />
	var homeModule = __webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(6);
	var app = angular.module("app", [
	    'ui.router'
	]);
	homeModule.configure(app);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	var controller = __webpack_require__(2);
	function configure(app) {
	    controller.register(app);
	    app.config(function ($stateProvider, $urlRouterProvider) {
	        $stateProvider.state('home', {
	            url: '/',
	            views: {
	                "main@": {
	                    controller: "HomeController as vm",
	                    template: __webpack_require__(3)
	                }
	            }
	        });
	        $urlRouterProvider.otherwise('/');
	    });
	}
	exports.configure = configure;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function register(app) {
	    app.controller("HomeController", HomeController);
	}
	exports.register = register;
	var HomeController = (function () {
	    function HomeController($http) {
	        this.$http = $http;
	        this.hello = "Howdy";
	        this.$http.get('api/test')
	            .then(function (response) {
	        }, function (error) {
	            throw error;
	        });
	    }
	    return HomeController;
	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<h1>It Works!</h1>\r\n\r\n<p>{{vm.hello}}</p>"

/***/ }
]);