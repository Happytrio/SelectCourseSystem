angular.module('myapp')
.factory('BaseService', ['$rootScope',function(scope) { 
  var data = {    // our factory definition
    user: [
    	[],
    	[],
    	[],
    	[],
    	[],
    	[]
    ],
    init:function(){
    	alert(1);
    },
    trim:function(datas){
    	return datas.replace(/(^\s*)|(\s$)/g,'');
    },
    getLessonData:function(lessonData){
    	console.log(this.trim(lessonData));
    }
  };  
  return data;
}]);