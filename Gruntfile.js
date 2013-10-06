
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    meta: {
      version: '1.0.0',
      banner: '/*!\n  Escapist.js, v<%= meta.version %>\n' +
        '  Copyright (c) <%= grunt.template.today("yyyy") %> Michael Stapp\n' +
        '  MIT License\n' +
        '  https://github.com/mstapp/escapistjs\n*/\n\n'
    },

    concat: {
        options: {
            banner: '<%= meta.banner %>',
            process: function(src, filepath) {

                // not license file? just use src
                if (filepath.indexOf('LICENSE.txt') !== 0) {
                    return src;
                }

                // wrap license file in block comment
                return '/*!\n' + src + '\n*/\n';
            },
        },
        dist: {
            src: ['LICENSE.txt','src/escapist.js'],
            dest: 'dist/escapist.js',
        },
    },

    clean: ['dist'],

    watch: {
        files: ['src/**/*.js'],
        tasks: 'build'
    }

  });


  grunt.registerTask('build', ['concat']);

  grunt.registerTask('default', 'build');
};

