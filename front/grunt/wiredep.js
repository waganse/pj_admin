// Inject Bower components
// grunt-wiredep: <https://github.com/stephenplusplus/grunt-wiredep>
// wiredep: <https://github.com/taptapship/wiredep>

'use strict';

module.exports = {

    // Targets for auto injection
    target: {
        src: ['<%= path.markups %>/**/*.jade'],
        // Force absolute URL
        fileTypes: {
            jade: {
                replace: {
                    js: 'script(src=\'/{{filePath}}\')',
                    css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
                }
            }
        },
        // Remove unnecessary path: "/../bower_components/xxx" -> "/bower_components/xxx"
        ignorePath: /(\.\.\/)+/
    }

};
