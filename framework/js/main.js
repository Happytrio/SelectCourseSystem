myapp.controller('mainController',['$scope','BaseService',
	function($scope,BaseService){
		$scope.isShow = false;
		$scope.tableView = BaseService.user;
		$scope.tableView.forEach(function(a){
			if(a != ''){
				a.forEach(function(b){
					if(b == ''){
						console.log(1);
					}
				});
			}
		})
		$scope.isShow = false;
	}
]);
