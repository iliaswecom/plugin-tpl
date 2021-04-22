module.exports = function( grunt ) {
	var BUILD_DIR  = 'build/',
		CSS_DIR    = 'css/',
		JS_DIR     = 'js/',
		PHP_DIR    = 'php/',
		VENDOR_DIR = 'vendor/';

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		clean: {
			all: BUILD_DIR,
		},
		watch: {
			options: {
				interval: 2000
			},
			all: {
				files: [
					CSS_DIR + '**',
					JS_DIR + '**',
					PHP_DIR + '**',
					'<%= pkg.name %>.php'
				],
				tasks: ['clean:all', 'copy:all'],
				options: {
					spawn: false,
				},
			}
		},
		copy: {
			plugin: {
				src: '<%= pkg.name %>.php',
				dest: BUILD_DIR + '<%= pkg.destName %>/<%= pkg.destName %>.php',
			},
			css: {
				expand: true,
				cwd: CSS_DIR,
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + CSS_DIR,
			},
			js: {
				expand: true,
				cwd: JS_DIR,
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + JS_DIR,
			},
			php: {
				expand: true,
				cwd: PHP_DIR,
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + PHP_DIR,
			},
			analog: {
				expand: true,
				cwd: VENDOR_DIR + 'analog',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + VENDOR_DIR + 'analog',
			},
			psr: {
				expand: true,
				cwd: VENDOR_DIR + 'psr',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + VENDOR_DIR + 'psr',
			},
			autoload: {
				src: VENDOR_DIR + 'autoload.php',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + VENDOR_DIR + 'autoload.php',
			},
			composer: {
				expand: true,
				cwd: VENDOR_DIR + 'composer',
				src: '**',
				dest: BUILD_DIR + '<%= pkg.destName %>/' + VENDOR_DIR + 'composer',
			},
		},
		'string-replace': {
			main: {
				files: {
					'build/': 'build/**/*.php'
				},
				options: {
					saveUnchanged: false,
					replacements: [
						{
							pattern: /Xkon/g,
							replacement: '<%= pkg.baseNamespace %>'
						},
						{
							pattern: /Plugin_Tpl/g,
							replacement: '<%= pkg.baseClass %>'
						},
						{
							pattern: /PLUGIN_TPL/g,
							replacement: '<%= pkg.baseClass.toUpperCase() %>'
						},
						{
							pattern: /plugin_tpl/g,
							replacement: '<%= pkg.baseClass.toLowerCase() %>'
						},
						{
							pattern: /plugin-tpl/g,
							replacement: '<%= pkg.destName %>'
						},
						{
							pattern: /https:\/\/xkon.dev/g,
							replacement: '<%= pkg.companyWebsite %>'
						},
						{
							pattern: /Konstantinos Xenos/g,
							replacement: 'Wecommerce'
						},
						{
							pattern: /Plugin - Template/g,
							replacement: '<%= pkg.pluginName %>'
						},
						{
							pattern: /github\.com\/mrxkon/g,
							replacement: 'github.com/atwecom'
						}
					]
				}
			}
		},
		compress: {
			main: {
				options: {
					mode: 'zip',
					archive: BUILD_DIR + '<%= pkg.destName %>.zip'
				},
				expand: true,
				cwd: BUILD_DIR + '<%= pkg.destName %>/',
				src: '**/*',
				dest: '<%= pkg.destName %>',
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-string-replace' );

	grunt.registerTask(
		'copy:all',
		[
			'clean:all',
			'copy:plugin',
			'copy:css',
			'copy:js',
			'copy:php',
			'copy:analog',
			'copy:psr',
			'copy:autoload',
			'copy:composer'
		]
	);

	grunt.registerTask(
		'build',
		[
			'copy:all',
			'string-replace',
			'compress'
		]
	);
};