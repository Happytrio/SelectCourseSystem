//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	less = require('gulp-less');
    

gulp.task('lesson',function(){
	gulp.src('framework/less/lessonList.less')
	.pipe(less())
	.pipe(gulp.dest('style/lessonCss'));
});

