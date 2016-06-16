module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });
    grunt.loadTasks('grunt'); //loading the grunt folder here
    grunt.registerTask('default', ['imagemin','watch']);
};