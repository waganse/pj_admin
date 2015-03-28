// Watch updates and run predefined tasks
// grunt-contrib-watch: <https://github.com/gruntjs/grunt-contrib-watch>

'use strict';

module.exports = {

    // Reload Grunt config
    grunt: {
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ],
        options: {
            reload: true
        }
    },

    // Inject Bower components
    bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
    },

    // HTML validation
    html: {
        files: ['<%= path.html %>/**/*.html'],
        tasks: ['newer:validation']
    },

    // JSHint
    js: {
        files: ['<%= path.js %>/**/*.js'],
        tasks: ['newer:jshint']
    },

    // Unit testing
    test: {
        files: ['test/spec/*.js'],
        tasks: ['test:skip-compile']
    },

    // Styles
    css: {
        files: ['<%= path.css %>/**'],
        tasks: ['newer:autoprefixer', 'newer:csslint']
    },

    // CSS sprites
    sprite: {
        files: ['<%= path.sprites %>/*.png'],
        tasks: ['sprite']
    },

    // Compile Jade
    jade: {
        files: ['<%= path.markups %>/**/*.jade'],
        tasks: ['jade']
    },

    // Compile Stylus
    stylus: {
        files: ['<%= path.styles %>/**'],
        tasks: ['stylus']
    }

};
