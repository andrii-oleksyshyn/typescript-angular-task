module.exports = function (grunt) {
  grunt.config.set('wiredep', {
    task: {
      src: 'views/layout.ejs',
      ignorePath: ['../assets']
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
