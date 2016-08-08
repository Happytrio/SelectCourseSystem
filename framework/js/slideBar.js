myapp.controller('NavSlidebar', ['$scope','$location',
	function($scope,$location){
		$scope.changeUrl = function(url){
			$location.url(url);
		}
	}
]);
