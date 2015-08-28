// Grunt task registration
// Manage grunt tasks here instead of `grunt.registerTask`.
// Refer: <https://github.com/firstandthird/load-grunt-config#aliases>

'use strict';

var grunt = require('grunt');

module.exports = {

    // Generate source codes and spritesheet images
    compile: [
        'clean:tmp',
        'wiredep',
        'sprite',
        'jade',
        'stylus',
        'autoprefixer'
    ],

    // Validation and lint
    lint: function (target) {
        if (target !== 'skip-compile') {
            grunt.task.run([
                'compile'
            ]);
        }
        grunt.task.run([
            'newer:validation',
            'newer:csslint',
            'newer:jshint'
        ]);
    },

    // Run testing framework
    test: function (target) {
        if (target !== 'skip-compile') {
            grunt.task.run([
                'compile'
            ]);
        }
        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    },

    // Start localhost server
    serve: function (target) {
        if (target === 'dist') {
            grunt.task.run([
                'browserSync:dist'
            ]);
        }
        else {
            grunt.task.run([
                'compile',
                'browserSync:src',
                'watch'
            ]);
        }
    },

    // Distribute. This is a part of build task.
    _dist: [
        'clean:dist',
        'copy:dist',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ],

    // Build
    build: [
        'compile',
        '_dist'
    ],

    // Define default `grunt` alias
    default: [
        'compile',
        'lint:skip-compile',
        'test:skip-compile',
        '_dist'
    ]

};
