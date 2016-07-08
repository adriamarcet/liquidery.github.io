module.exports = function(grunt) {

	grunt.config('concat', {

		// Concatenate JS files and output scripts.js
		dist: {
			src: [
				/* 'js/dev_scripts.js',  // This specific file */
				
				/* Calling jQuery here */
				'components/jquery/jquery.min.js',

				/* Adding CHOSEN plugin here */
				'components/chosen/chosen.jquery.js',

				/* Specific functions file */
				'js/fn.upload-image.js',

				/* Import all script files in JS folder*/
				'js/document.ready.js',
				/* Import all script files in JS folder*/
				// 'js/**/*.js',
			],
			dest: '../dist/js/scripts.js',
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
};