module.exports = function(grunt){

// Project configuration.
	grunt.initConfig({
		concat: {
			base_js: {
				src: ['js/vendor/jquery.js', 'js/foundation.min.js', 'js/foundation/foundation.topbar.js', 'js/vendor/modernizr.js'],
				dest:'build/js/base_scripts.js',
			},
			base_css: {
				src: ['css/normalize.css', 'css/foundation.css', 'css/app.css'],
				dest: 'build/css/base_styles.css',
			},
			tei_js: {

			},
			tei_css: {
				src: ['css/teibp.css', 'build/css/base_styles.css'],
				dest: 'build/css/tei_styles.css'
			},
			v_machine_js:{
				src: ['/vmachine_assets/vmachine.js','build/js/base_scripts.js'],
				dest: 'build/js/vmachine_scripts.js',
			},
			v_machine_css:{
				src: ['vmachine_assets/vmachine.css', 'build/css/base_styles.css'],
				dest:'build/css/vmachine_styles.css',
			},
		},
		watch:{
			js: {
				files: ['js/**/*.js'],
				tasks:['concat:base_js', 'uglify'],
			},
			css: {
				files:['css/**/*.css'],
				tasks: ['concat:base_css'],
			}
		},
		uglify: {
	      	options: {
	        	preserveComments: false
	      	},
	      	base: {
	      		files:{
	      			'build/js/base_scripts.js': ['build/js/base_scripts.js'],
	      		}
	      	},
	      	vmachine:{
	      		files:{
	      			'build/js/vmachine_scripts.js': ['build/js/vmachine_scripts.js']
	      		}
	      	}
      	}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);


};