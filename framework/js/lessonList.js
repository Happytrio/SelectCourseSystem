myapp.controller('LessonTab',['$scope',
	function($scope){
		$scope.lessons = [
			{num:1,lesson:'高等数学一',teacher:'周老师',people:60,time:'一、3-4  三、5-6'},
			{num:1,lesson:'高等数学二',teacher:'吴老师',people:58,time:'二、1-2  三、5-6'},
			{num:1,lesson:'高等数学三',teacher:'郑老师',people:52,time:'三、3-4  四、7-8'},
			{num:1,lesson:'高等数学四',teacher:'王老师',people:48,time:'一、1-2 五、3-4'},
			{num:1,lesson:'高等数学一',teacher:'赵老师',people:60,time:'二、3-4  四、1-2'}
		];
	}
]);