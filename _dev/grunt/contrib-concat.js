module.exports = function(grunt) {

	grunt.config('concat', {
		// Concatenate JS files and output scripts.js
		dist: {
			src: [
				/* 'js/dev_scripts.js',  // This specific file */
				'js/**/*.js', // All JS in the libs folder
			],
			dest: '../dist/js/scripts.js',
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
};