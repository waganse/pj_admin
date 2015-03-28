// Grunt base configuration

// This Gruntfile.js is based on "load-grunt-config" module.
// Config files are separated and put into `grunt/` directory.
// load-grant-config: <https://github.com/firstandthird/load-grunt-config>

'use strict';

module.exports = function (grunt) {

    // Display the execution time.
    require('time-grunt')(grunt);

    // Initialize with "load-grunt-config".
    require('load-grunt-config')(grunt, {

        // Define variables for grunt config here.
        config: {
            path: {
                src:        'src',
                dist:       'dist',
                distIgnore: '**/_*/**',     // Excluded directories or files of distribution, e.g. Sass directory.
                tmp:        '.tmp/dist',
                test:       'test',
                markups:    'src',
                styles:     'src/_stylus',
                scripts:    'src/js',
                images:     'src/img',
                sprites:    'src/img/_sprites',
                html:       '.tmp/dist',
                css:        '.tmp/dist/css',
                js:         'src/js'
            }
        }

    });

};
