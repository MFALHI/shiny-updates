module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			js: {
				expand: true,
				ext: '.min.js',
				src: 'js/**/*.js'
			}
		},
		qunit: {
			files: ['tests/**/*.html']
		},
		jshint: {
			files: ['Gruntfile.js', 'js/**/*.js', 'tests/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'qunit']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['jshint', 'qunit']);

	grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);

};
