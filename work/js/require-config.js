require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery-1.9.1',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'bootstrap': 'lib/bootstrap.min',
        'raty': 'lib/jquery.raty',
        'validation': 'lib/jquery.validation',
        'trunk': 'lib/jquery.trunk8',
        'jquery-ui': 'lib/jquery-ui-1.10.3.custom',
        'const': 'common/constants'
	},
    shim: {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'bootstrap': {
            'deps': ['jquery']
        },
        'raty': {
            'deps': ['jquery']
        },
        'validation': {
            'deps': ['jquery']
        },
        'trunk': {
            'deps': ['jquery']
        },
        'jquery-ui': {
            'deps': ['jquery']
        }
    }
});