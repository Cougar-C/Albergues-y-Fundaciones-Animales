var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AlberguesyFundaciones_1 = new ol.format.GeoJSON();
var features_AlberguesyFundaciones_1 = format_AlberguesyFundaciones_1.readFeatures(json_AlberguesyFundaciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlberguesyFundaciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlberguesyFundaciones_1.addFeatures(features_AlberguesyFundaciones_1);
var lyr_AlberguesyFundaciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlberguesyFundaciones_1, 
                style: style_AlberguesyFundaciones_1,
                interactive: true,
                title: '<img src="styles/legend/AlberguesyFundaciones_1.png" /> Albergues y Fundaciones'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_AlberguesyFundaciones_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_AlberguesyFundaciones_1];
lyr_AlberguesyFundaciones_1.set('fieldAliases', {'Name': 'Name', 'Página We': 'Página We', 'Teléfono': 'Teléfono', 'Dirección': 'Dirección', });
lyr_AlberguesyFundaciones_1.set('fieldImages', {'Name': 'TextEdit', 'Página We': '', 'Teléfono': '', 'Dirección': '', });
lyr_AlberguesyFundaciones_1.set('fieldLabels', {'Name': 'inline label', 'Página We': 'inline label', 'Teléfono': 'inline label', 'Dirección': 'inline label', });
lyr_AlberguesyFundaciones_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});