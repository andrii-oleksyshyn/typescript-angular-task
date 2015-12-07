module.exports = function (grunt) {
  grunt.config.set('ts', {
    dev: {
      src: 'assets/**/*.ts',
      options: {
        sourceMap: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};