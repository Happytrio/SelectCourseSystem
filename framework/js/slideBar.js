myapp.controller('NavSlidebar', ['$scope','$location',
	function($scope,$location){
		console.log($location);
		$scope.changeUrl = function(url){
			$location.url(url);
		}
	}
]);
