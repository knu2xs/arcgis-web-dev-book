/*global require, define, location */
/*jshint laxcomma:true */
'use strict';

require([

    // load application controller
    'controllers/appcontroller',

    // adding dependency for map services module
    'services/mapservices',

    // load module when page is ready
    'dojo/domReady!'
], function (appCtrl, mapServices) {

    // initialize application controller with parameters
    appCtrl.init({
        elem: 'map-div',
        mapOptions: {
            basemap: 'gray',
            center: [-118.241, 34.0542],
            zoom: 12
        },
        layers: mapServices.loadServices()
    });
});