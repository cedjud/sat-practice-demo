// TODO: move this to webpack

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          './src/index.css': './src/scss/style.scss'
        }
      }
    },
    watch: {
      files: ['./src/scss/**/*.scss'],
      tasks: ['sass']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
};
