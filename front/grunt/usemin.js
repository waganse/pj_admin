// Optimize CSS/JavaScript and update HTML
// This module requires "useminPrepare" task,
// and depends on "grunt-contrib-concat", "grunt-contrib-cssmin" and "grunt-contrib-uglify".
// grunt-usemin: <https://github.com/yeoman/grunt-usemin>

'use strict';

module.exports = {

    // Base options
    options: {
        assetsDirs: [
            '<%= path.dist %>'
        ]
    },

    // Update HTML files
    html: {
        files: [{
            src: ['<%= path.dist %>/**/*.html'],
            filter: 'isFile'
        }]
    },

    // Update CSS files
    css: {
        files: [{
            src: ['<%= path.dist %>/**/*.css'],
            filter: 'isFile'
        }]
    }

};
