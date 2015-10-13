/*global require, define, location */
/*jshint laxcomma:true */

define([

    // indicates dependency on the map controller
    'controllers/mapcontroller',
], function (MapController){

    // triggered after map loads
    function mapLoaded(map){
        console.debug('map has been loaded', map);
    }

    // initialize function
    function init(config){

        // initialize new map controller
        var mapCtrl = new MapController(config);

        // loads map controller and waits for load to finish
        mapCtrl.load().then(mapLoaded);
    }

    // expose the initialize function
    return {
        init: init
    };
});