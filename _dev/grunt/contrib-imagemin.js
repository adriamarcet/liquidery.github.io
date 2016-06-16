module.exports = function(grunt) {

	grunt.config('imagemin', {

		// Optimize images
		dynamic: {
			files: [{
				expand: true,
				cwd: '../img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: '../dist/img/'
			}]
		}
	});

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};