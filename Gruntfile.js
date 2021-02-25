module.exports = function( grunt ) {
	var SOURCE_DIR     = 'src/',
		BUILD_DIR      = 'build/',
		BUILD_PACK_DIR = 'build/plugin-tpl',
		VENDOR_DIR     = 'vendor/';

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		clean: {
			all: BUILD_DIR,
			dynamic: {
				expand: true,
				cwd: BUILD_DIR,
				src: []
			}
		},
		watch: {
			options: {
				interval: 2000
			},
			all: {
				files: [
					SOURCE_DIR + '**',
				],
				tasks: ['copy:all'],
			}
		},
		copy: {
			plugin: {
				expand: true,
				cwd: SOURCE_DIR,
				src: '**',
				dest: BUILD_DIR + '<%= pkg.name %>/',
			},
			analog: {
				expand: true,
				cwd: VENDOR_DIR + 'analog',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.name %>/' + VENDOR_DIR + 'analog',
			},
			psr: {
				expand: true,
				cwd: VENDOR_DIR + 'psr',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.name %>/' + VENDOR_DIR + 'psr',
			},
			autoload: {
				src: VENDOR_DIR + 'autoload.php',
				dest: BUILD_DIR + '<%= pkg.name %>/' + VENDOR_DIR + 'autoload.php',
			},
			composer: {
				expand: true,
				cwd: VENDOR_DIR + 'composer',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.name %>/' + VENDOR_DIR + 'composer',
			}
		},
		compress: {
			main: {
				options: {
					mode: 'zip',
					archive: BUILD_DIR + '<%= pkg.name %>.zip'
				},
				expand: true,
				cwd: BUILD_DIR + '<%= pkg.name %>/',
				src: '**/*',
				dest: '<%= pkg.name %>',
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );

	grunt.registerTask(
		'copy:all',
		[
			'clean:all',
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
};