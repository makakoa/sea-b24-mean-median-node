/*jshint node: true*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js']
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    jscs: {
      src: ['lib/*.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};
