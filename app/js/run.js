/*global define, require, location */
/*jshint laxcomma:true */

// helps catch coding issues, keeping this into local scope
(function(){

    // also helps catch coding issues, keeping things cleaner
    'use strict';

    // create the regular expressing
    var pathRX = new RegExp(/\/[^\/]+$/),

        // change where dojo looks for custom modules
        locationPath = location.pathname.replace(pathRX, '');

    // pass configuration object into first require statement
    require({

        // load modules as needed, lazy loading
        async: true,

        // provide aliases for modules
        aliases: [
            ['text', 'dojo/text']
        ],

        // define packages using modified pathname
        packages: [{
            name: 'controllers',
            location: locationPath + 'js/controllers'
        }, {
            name: 'services',
            location: locationPath + 'js/services'
        }, {
            name: 'utils',
            location: locationPath + 'js/utils'
        }, {
            name: 'widgets',
            location: locationPath + 'js/widgets'
        }, {
            name: 'app',
            location: locationPath + 'js',
            main: 'main'
        }]

        // load app module after configuration
    }, ['app']);
})();