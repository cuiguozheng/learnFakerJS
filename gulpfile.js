var gulp = require('gulp'), //gulp引入
	include = require('gulp-include'),
	optimize = require('gulp-requirejs-optimize'),
	Mock = require('mockjs')
	concat = require('gulp-concat'),
	connect = require('gulp-connect'); //启动服务

//gulp server
gulp.task('server', function(){
	connect.server({
		root: './build',
		port: 8080,
		livereload: true
	});
});

//html task
gulp.task('html', function(){
	gulp.src('src/views/*.html')
		.pipe(include())
		.pipe(gulp.dest('build/views'));
});

//js task
gulp.task('js', function(){
	gulp.src('src/js/entrance/*.js')
		.pipe(optimize({
			optimize: 'none'
		}))
		.on('error', function (error) {
            console.log(error.message);
        })
		.pipe(gulp.dest('build/static/js'));
});

//boundle task
gulp.task('boundle', function(){
	gulp.src('src/js/libs/{jquery.min,require.min}.js')
		.pipe(concat('boundle.min.js'))
		.pipe(gulp.dest('build/static/js'));
});




/*var schema = {
    type: 'object',
    properties: {
        user: {
            type: 'object',
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt'
                },
                name: {
                    type: 'string',
                    faker: 'name.findName'
                },
                email: {
                    type: 'string',
                    format: 'email',
                    faker: 'internet.email'
                }
            },
            required: ['id', 'name', 'email']
        }
    },
    required: ['user'],
    definitions: {
        positiveInt: {
            type: 'integer',
            minimum: 0,
            exclusiveMinimum: true
        }
    }
};
 
var sample = jsf(schema);
 
console.log(sample);*/

//gulp reload
gulp.task('reload', function(){
	gulp.src('build/views/*.html')
		.pipe(connect.reload());
});

//watcher
gulp.task('watcher', function(){
	gulp.watch(['src/js/modules/**/*.js','src/js/entrance/*.js'],['js','reload']);
	gulp.watch('src/views/**/*',['html', 'reload']);
});

//dev
gulp.task('dev',['html', 'js','boundle','server'],function(){
	gulp.start('watcher');
});