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
                    'app/services/mainService.js',
                    'app/templates/resume/resumeCtrl.js',
                    'app/templates/favorites/favoritesCtrl.js'
	        	],
	        	dest : 'app/production.js'
        	},
            css : {
                src : [
                    'app/css/main.css',
                    'app/css/about.css',
                    'app/css/resume.css',
                    'app/css/projects.css',
                    'app/css/favorites.css'
                ],
                dest : 'app/production.css'
            }
        }
    });



    // define the default task that executes when we run 'grunt' from inside the project
    grunt.registerTask('default', ['jshint', 'concat']);

};
