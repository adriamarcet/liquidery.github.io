module.exports = function(grunt) {

	grunt.config('watch', {
		
		// Watch script files
		scripts: {
		    files: ['js/*.js', 'js/**/*.js'],
		    tasks: ['concat', 'uglify'],
		    options: {
		        spawn: false,
		    },
		},

		// Watch style files
		css: {
		    files: ['sass/*.scss','sass/*/**.scss'],
		    tasks: ['sass','postcss'],
		    options: {
		        spawn: false,
		    }
		},

		// Watch image files
		images: {
			files: ['../**/*.{png,jpg,gif}', '../img/*.{png,jpg,gif}'],
			tasks: ['imagemin'],
			options: {
				spawn: false,
			}
		},

		//Watch html files
		html:{
			files: ['../**/*.html'],
			tasks: [],
			options: {
				spawn: false,
			}
		},

		options: {
			// to use this a plugin is needed @https://goo.gl/1dvN5D
			livereload: true,
		}
	});
	
    grunt.loadNpmTasks('grunt-contrib-watch');
};