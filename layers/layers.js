var wms_layers = [];
var lyr_Mosaico_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mosaico",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mosaico_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420834.498966, 1214750.028572, -9420602.430177, 1214892.576654]
                            })
                        });var lyr_CoberturaFoliar_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cobertura Foliar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CoberturaFoliar_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420834.498966, 1214750.028572, -9420602.430177, 1214892.576654]
                            })
                        });var format_linea_2 = new ol.format.GeoJSON();
var features_linea_2 = format_linea_2.readFeatures(json_linea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_linea_2.addFeatures(features_linea_2);var lyr_linea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_2, 
                style: style_linea_2,
                title: '<img src="styles/legend/linea_2.png" /> linea'
            });var format_fallas_3 = new ol.format.GeoJSON();
var features_fallas_3 = format_fallas_3.readFeatures(json_fallas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fallas_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_fallas_3.addFeatures(features_fallas_3);var lyr_fallas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fallas_3, 
                style: style_fallas_3,
                title: '<img src="styles/legend/fallas_3.png" /> fallas'
            });var format_ancho_4 = new ol.format.GeoJSON();
var features_ancho_4 = format_ancho_4.readFeatures(json_ancho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ancho_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ancho_4.addFeatures(features_ancho_4);var lyr_ancho_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ancho_4, 
                style: style_ancho_4,
                title: '<img src="styles/legend/ancho_4.png" /> ancho'
            });

lyr_Mosaico_0.setVisible(true);lyr_CoberturaFoliar_1.setVisible(true);lyr_linea_2.setVisible(true);lyr_fallas_3.setVisible(true);lyr_ancho_4.setVisible(true);
var layersList = [lyr_Mosaico_0,lyr_CoberturaFoliar_1,lyr_linea_2,lyr_fallas_3,lyr_ancho_4];
lyr_linea_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'lenght': 'lenght', });
lyr_fallas_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Lenght': 'Lenght', });
lyr_ancho_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_linea_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'lenght': 'Range', });
lyr_fallas_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Lenght': 'TextEdit', });
lyr_ancho_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_linea_2.set('fieldLabels', {'fid': 'inline label', 'id': 'inline label', 'lenght': 'no label', });
lyr_fallas_3.set('fieldLabels', {'fid': 'inline label', 'id': 'inline label', 'Lenght': 'no label', });
lyr_ancho_4.set('fieldLabels', {'fid': 'no label', 'id': 'inline label', });
lyr_ancho_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});