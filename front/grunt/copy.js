// Copy files and folders
// grunt-contrib-copy: <https://github.com/gruntjs/grunt-contrib-copy>

'use strict';

module.exports = {

    // Distribution
    dist: {
        files: [
            // Copy static files.
            {
                expand: true,
                dot: true,
                cwd: '<%= path.src %>',
                dest: '<%= path.dist %>',
                filter: 'isFile',               // Ignore blank directory.
                src: [
                    '**',
                    '!<%= path.distIgnore %>',
                    '!**/*.jade',
                    '!bower_components/**',
                    '!**/.DS_Store',
                    '!**/*.{css,js}',           // Ignore CSS and JavaScript because they are compiled in usemin task.
                    '!**/*.{png,jpg,gif}'       // Ignore images because they are copied in imagemin task.
                ]
            },
            // Copy compiled source codes.
            {
                expand: true,
                cwd: '<%= path.tmp %>',
                dest: '<%= path.dist %>',
                src: [
                    '**/*.html',
                    '!<%= path.distIgnore %>'
                ]
            }
        ]
    }

};
