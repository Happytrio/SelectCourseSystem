myapp.controller('mainController',['$scope','BaseService',
	function($scope,BaseService){
		$scope.tableViewClass = [[],[],[],[],[],[],[],[]];
		$scope.tableView = BaseService.user;
		$scope.tableView.forEach(function(a,indexA){	
			a.forEach(function(b,indexB){
				if(b){
					$scope.tableViewClass[indexA][indexB] = 'ok'
				}
			});
			
		})
	}
]);
