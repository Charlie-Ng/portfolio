// wrapper function
module.exports = function(grunt){
	// load all our Grunt plugins
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // task configuration goes here
        jshint : {
        	all : [
        		'Gruntfile.js'
        	]
        }

        // concat : {
        // 	all : {
	       //  	src : [
	       //  		'index.html'
	       //  	],
	       //  	dest : 'app/dist/production.'
        // 	}
        // }
    });



    // define the default task that executes when we run 'grunt' from inside the project
    grunt.registerTask('default', ['jshint']);

};
