module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json'),
        taskName,
        requireFiles01 = grunt.file.expandMapping(
            'js/*/main.js'
        ),
        requireFiles02 = grunt.file.expandMapping(
            'js/*/*/main.js'
        ),
        requireConfig = {},
        watch = {};

    requireFiles01.forEach(function(data, i) {
        var key = data.dest.replace(/^js\//, '').replace(/\.js$/, ''),
            options = {
                baseUrl: 'js',
                name: data.src[0].replace(/^js\//,'').replace(/\.js/, ''),
                mainConfigFile: 'js/require-config.js',
                out: '../assets/' + data.dest,
                optimize: 'none'
            };

        requireConfig[key] = {
            options: options
        };

        watch['requirejs-' + key] = {
            files: [
                'js/' + key.replace(/\/.+$/, '') + '/*/*.js'
            ],
            tasks: [
                'requirejs:' + key
            ]
        };

    });

    requireFiles02.forEach(function(data, i) {
        var key = data.dest.replace(/^js\//, '').replace(/\.js$/, ''),
            options = {
                baseUrl: 'js',
                name: data.src[0].replace(/^js\//,'').replace(/\.js/, ''),
                mainConfigFile: 'js/require-config.js',
                out: '../assets/' + data.dest,
                optimize: 'none'
            };

        requireConfig[key] = {
            options: options
        };

        watch['requirejs-' + key] = {
            files: [
                'js/' + key.replace(/\/main/, '') + '/*/*.js'
            ],
            tasks: [
                'requirejs:' + key
            ]
        };
    });

    watch['requirejs'] = {
        files: ['js/*/*/*.js', 'js/*/*/*/*.js'],
        tasks: ['requirejs', 'ftpscript']
    };

    watch['compass'] = {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['clean','compass','cssmin', 'ftpscript']
    };

    grunt.initConfig({
        'requirejs': requireConfig,

        'clean': {
            build: ['css/*'],
            release: ['css/*']
        },

        'compass': {
            dev: {}
        },

        'cssmin': {
            combine: {
                files: {
                    '../assets/css/style.min.css': ['css/lib/*.css', 'css/*.css'],
                    '../assets/css/config/style.min.css': ['css/lib/*.css', 'css/config/style.css'],
                    '../assets/css/master/style.min.css': ['css/lib/*.css', 'css/master/style.css'],
                    '../assets/css/user/style.min.css': ['css/lib/*.css', 'css/user/style.css'],
                    '../assets/css/company/style.min.css': ['css/lib/*.css', 'css/company/style.css'],
                    '../assets/css/ext_project/style.min.css': ['css/lib/*.css', 'css/ext_project/style.css']
                }
            }
        },

        'ftpscript': {
            upload: {
                options: {
                    host: 'wa-ganse.com',
                    passive: true
                },
                files: [
                    {
                        expand: true,
                        // cwd: '/Users/yossy/Documents/projects/fuel_admin/public/assets',
                        cwd: '/Users/yosuke.c.sato/Documents/work/projects/99_sagas/fuel_admin/assets',
                        src: [
                            '**/*.js',
                            '**/*min.css',
                            '!**/exclude.js'
                        ],
                        dest: '/var/www/html/wa-ganse.com/html/labo/assets'
                    }
                ]
            }
        },

        'jshint': {
            options: {
                eqeqeq: true,
                undef: true,
                unused: true,
                latedef: true,
                quotmark: 'single',
                trailing: true,
                globals: {
                    RUI: true,
                    location: true,
                    alert: true,
                    history: true,
                    define: true,
                    require: true,
                    setTimeout: true,
                    cleatTimeout: true,
                    setInterval: true,
                    clearInterval: true,
                    Math: true,
                    window: true,
                    document: true,
                    console: true,
                    arguments: true,
                    Image: true,
                    navigator: true,
                    Array: true,
                    Object: true,
                    RegExp: true,
                    localStorage: true,
                    sessionStorage: true,
                },
            },
            'defaults': ['js/build/*.js'],
        },

        watch: watch
    });

    for(taskName in pkg.devDependencies) {
        if(taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }

    grunt.registerTask('default', ['watch']);
};