module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        watch: {
            sass: {
                files: ['sass/custom.scss'],
                tasks: ['sass:dist']
            }
        },
        
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'static/css/style.css': 'sass/custom.scss'
                }
            }
        }
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass:dist', 'watch'])  

};