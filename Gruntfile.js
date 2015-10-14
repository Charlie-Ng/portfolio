// wrapper function
module.exports = function(grunt){
	// load all our Grunt plugins
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // task configuration goes here
        jshint : {
        	all : [
        		'Gruntfile.js',
                'app/*.js',
                'app/services/*.js',
                'app/templates/resume/*.js'
        	]
        },

        concat : {
        	all : {
	         	src : [
                    'app/app.modules.js',
                    'app/app.controllers.js',
                    'app/app.routes.js'
	         	],
	         	dest : 'app/production.js'
        	}
        }
    });



    // define the default task that executes when we run 'grunt' from inside the project
    grunt.registerTask('default', ['jshint']);

};
