// Preparation for grunt-usemin
// This module requires "usemin" task.
// grunt-usemin: <https://github.com/yeoman/grunt-usemin>

'use strict';

module.exports = {

    // Base options
    options: {
        root: ['<%= path.tmp %>', '<%= path.src %>'],
        dest: '<%= path.dist %>',
        flow: {
            steps: {
                css: ['concat', 'cssmin'],
                js: ['concat', 'uglifyjs']
            },
            post: {}
        }
    },

    // Parse settings from target HTML code
    html: ['<%= path.dist %>/**/*.html']

};
