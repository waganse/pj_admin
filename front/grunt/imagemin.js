// Minify PNG, JPEG and GIF images
// grunt-contrib-imagemin: <https://github.com/gruntjs/grunt-contrib-imagemin>

'use strict';

module.exports = {

    // Distribution
    dist: {
        files: [{
            expand: true,
            cwd: '<%= path.src %>',
            dest: '<%= path.dist %>',
            src: [
                '**/*.{png,jpg,gif}',
                '!<%= path.distIgnore %>',
                '!bower_components/**'
            ],
            filter: function(filepath) {
                return require('fs').readFileSync(filepath).length > 0;
            }
        }]
    }

};
