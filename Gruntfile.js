module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			plugin: {
				expand: true,
				cwd: 'src',
				src: '**',
				dest: 'build/<%= pkg.name %>/',
			},
			analog: {
				expand: true,
				cwd: 'vendor/analog',
				src: '**',
				dest: 'build/<%= pkg.name %>/vendor/analog',
			},
			psr: {
				expand: true,
				cwd: 'vendor/psr',
				src: '**',
				dest: 'build/<%= pkg.name %>/vendor/psr',
			},
			autoload: {
				src: 'vendor/autoload.php',
				dest: 'build/<%= pkg.name %>/vendor/autoload.php',
			},
			composer: {
				expand: true,
				cwd: 'vendor/composer',
				src: '**',
				dest: 'build/<%= pkg.name %>/vendor/composer',
			}
		},
		compress: {
			main: {
				options: {
					mode: 'zip',
					archive: 'build/<%= pkg.name %>.zip'
				},
				expand: true,
				cwd: 'build/<%= pkg.name %>/',
				src: '**/*',
				dest: '<%= pkg.name %>',
			}
		}
	});

	grunt.registerTask(
		'copy:all',
		[
			'copy:plugin',
			'copy:analog',
			'copy:psr',
			'copy:autoload',
			'copy:composer'
		]
	)

	grunt.registerTask(
		'build',
		[
			'copy:all',
			'compress'
		]
	)

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', ['uglify']);
};