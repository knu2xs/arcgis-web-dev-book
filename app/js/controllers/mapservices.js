/*global require, define, location */
/*jshint laxcomma:true */

define([
    'esri/layers/FeatureLayer'
], function (FeatureLayer) {

    function loadServices(){
        var layers = []
            , censusLayer;

        // create new feature layer instance
        censusLayer = new FeatureLayer('http://services5.arcgis.com/12oODIpfxlRR11MF/arcgis/rest/services/' +
            'Requests/FeatureServer/0');

        // add the feature layer to a list of services
        layers.push(censusLayer);

        // return the array of layers
        return layers;
    }

    return {
        loadServices: loadServices
    }
});