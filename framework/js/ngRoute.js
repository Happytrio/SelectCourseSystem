var myapp = angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/main', {
			templateUrl: './html/main.html'
		}).when('/lessonList', {
			templateUrl: './html/lessonList.html'
		}).otherwise({redirectTo:'/main/'})
	}
]);