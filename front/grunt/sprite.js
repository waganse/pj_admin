// CSS sprites generator
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {

    // Generate a Stylus file and spritesheet
    stylus: {
        src: '<%= path.sprites %>/*.png',
        destImg: '<%= path.images %>/sprites.png',
        destCSS: '<%= path.styles %>/_sprites.styl',
        imgPath: '/img/sprites.png',                // Use absolute URI.
        algorithm: 'binary-tree',
        padding: 2,
        cssFormat: 'css',                           // Remove this line to generate a mixin file instead.
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;  // Define prefix for variables.
        },
        cssOpts: {
            cssClass: function (item) {
                return '.' + item.name;
            }
        }
    }

};
