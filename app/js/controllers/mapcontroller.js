/*global require, define, location */
/*jshint laxcomma:true */

define([
    'dojo/_base/declare',   // builds classes in dojo
    'dojo/_base/lang',      // provides suite of utility functions
    'dojo/on',              // event listener
    'dojo/Deferred',        // generates javascript promises
    'esri/map'              // arcgis javascript sdk
], function (declare, lang, on, Deferred, Map) {
    return declare(null, {
        map: null,
        options: {},

        // call the first function
        constructor: function(options) {
            this.options = lang.mixin(this.options, options);
        },

        load: function() {

            // instantiates the new map
            var deferred = new Deferred()
                , layersLoaded = lang.hitch(this, function() {
                    deferred.resolve(this.map);
                });

            // creates new instance of map
            this.map = new Map(this.options.elem, this.options.mapOptions);

            // listens once for load event
            on.once(this.map, 'layers-add-result', layersLoaded);

            // add layers to map
            this.map.addLayers(this.options.layers);

            // return promise
            return deferred.promise;
        }
    })
});