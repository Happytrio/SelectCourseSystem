angular.module('myapp')
.factory('BaseService', ['$rootScope',function(scope) { 
  var data = {
    user: [
    	[],
    	[],
    	[],
    	[],
    	[],
    	[],
    	[],
    	[]
    ],
    init:function(){
   
    },
    trim:function(datas){
    	return datas.replace(/(^\s*)|(\s$)/g,'');
    },
    getLessonData:function(courseTime,courseName,courseTeacher){
    	var that = this;
    	var newData = that.trim(courseTime).split(',');
    	newData.forEach(function(d){
    		var newDatas = that.trim(d).split('-')[0];
	  		var timeData = that.trim(newDatas).split(' ');
  			var day = that.charToNumber(timeData[0]) ;
  			var dayLesson = Number.parseInt(timeData[1]);
			
				that.user[dayLesson-1][day] = courseName;
				that.user[dayLesson][day] = courseTeacher;
    	});
    	console.log(that.user);
    },
    charToNumber:function(char){
    	var num;
    	
    	switch(char){
    		case '一':
    			num = 1;
    			break;
    		case '二':
    			num = 2;
    			break;
    		case '三':
    			num = 3;
    			break;
    		case '四':
    			num = 4;
    			break;
    		case '五':
    			num = 5;
    			break;
    	}
    	
    	return num;
    }
  };  
  return data;
}]);