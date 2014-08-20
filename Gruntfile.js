module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'st.css': ['st.styl']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-stylus');

};
