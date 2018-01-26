module.exports = function(grunt){
  
    grunt.initConfig({
      browserify: {
        'dist/bundle.js': ['javascripts/main.js'],
        options: {
          transform: ['hbsfy'],
        }
      },
      jshint: {
        files: ['app/**/*.js'],
      options: {
        predef: ['document', 'console',],
  
        esnext: true,
        globalstrict: true,
        globals: {
          // "$": false
        },
        // browserify: true
        }
      }, 
      sass: {
        dist: {
          files: {
            'stylesheets/main.css':'sass/main.scss'
          }
        }
      }, 
      watch: {
        javascripts: {
          files: ['app/**/*.js'],
          tasks: ['jshint']
        },
        sass: {
          files: ['sass/**/*.scss'],
          tasks: ['sass']
        }
      }
    });
  
    require('matchdep')
      .filter('grunt-*')
      .forEach(grunt.loadNpmTasks);
  
    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);
  }