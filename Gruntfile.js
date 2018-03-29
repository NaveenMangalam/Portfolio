module.exports = function(grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: ';'
      },
      dist: {
          src: ['app/js/*.js'],
          dest: 'dist/app/js/home.js'
          },
          css: {
            src: ['assets/css/*.css', 'assets/css/**/*.css'],
            dest: 'dist/assets/css/style.css'
          }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
          },
          files : [{
            src: 'dist/assets/css/style.css',
            dest: 'app/css/style.css'
            }]
          }
    }, //sass
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/assets/css',
          ext: '.min.css'
          }]
        }
        },
        connect: {
          server: {
            options: {
              hostname: 'localhost',
              port: 3000,
              base: 'app/',
              livereload: true
            }
          }
          },

          watch: {
            options: {
              livereload: true,
              dateFormat: function(time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
              }
              },
              scripts: {
                files: 'app/js/*.js',
                tasks: ['concat'],
                },
              css: {
                files: ['assets/css/*.css','assets/css/**/*.css'],
                tasks: ['cssmin','concat']
                }
              }


  }); //initConfig

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-wiredep');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', [ 'cssmin', 'sass', 'concat', 'connect', 'watch']);

}; //wrapper function
