// Jade compiler
// grunt-contrib-jade: <https://github.com/gruntjs/grunt-contrib-jade>

'use strict';

var grunt = require('grunt');

module.exports = {

    // Compile markups
    compile: {
        options: {
            basedir: '<%= path.markups %>',
            pretty: true,
            // Define global variables here or read JSON file.
            data: grunt.file.readJSON('src/_data/site.json')
        },
        files: [{
            expand: true,
            cwd: '<%= path.markups %>',
            dest: '<%= path.html %>',
            src: [
                '**/*.jade',
                '!**/_*.jade'
            ],
            ext: '.html'
        }]
    }

};
