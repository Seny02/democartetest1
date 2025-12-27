var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REGION_1 = new ol.format.GeoJSON();
var features_REGION_1 = format_REGION_1.readFeatures(json_REGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_1.addFeatures(features_REGION_1);
var lyr_REGION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGION_1, 
                style: style_REGION_1,
                popuplayertitle: 'REGION',
                interactive: false,
                title: '<img src="styles/legend/REGION_1.png" /> REGION'
            });
var format_reponseb_2 = new ol.format.GeoJSON();
var features_reponseb_2 = format_reponseb_2.readFeatures(json_reponseb_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reponseb_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reponseb_2.addFeatures(features_reponseb_2);
var lyr_reponseb_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reponseb_2, 
                style: style_reponseb_2,
                popuplayertitle: 'reponseb',
                interactive: true,
                title: '<img src="styles/legend/reponseb_2.png" /> reponseb'
            });

lyr_OSMStandard_0.setVisible(true);lyr_REGION_1.setVisible(true);lyr_reponseb_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_REGION_1,lyr_reponseb_2];
lyr_REGION_1.set('fieldAliases', {'ID': 'ID', 'NOM_M': 'NOM_M', 'NOM': 'NOM', 'INSEE_REG': 'INSEE_REG', });
lyr_reponseb_2.set('fieldAliases', {'CONSEIL_RE': 'REGION', 'repb_Étiq': 'Nombre de Collaborateur', 'repb_field': 'Chiffres', 'repb_fie_1': 'Repertoire', 'repb_fie_2': 'Edition', 'Form_Tech': 'Gagnant', 'img': 'img', });
lyr_REGION_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_M': 'TextEdit', 'NOM': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_reponseb_2.set('fieldImages', {'CONSEIL_RE': 'TextEdit', 'repb_Étiq': 'TextEdit', 'repb_field': 'TextEdit', 'repb_fie_1': 'TextEdit', 'repb_fie_2': 'TextEdit', 'Form_Tech': 'TextEdit', 'img': 'ExternalResource', });
lyr_REGION_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'NOM_M': 'inline label - visible with data', 'NOM': 'inline label - visible with data', 'INSEE_REG': 'inline label - visible with data', });
lyr_reponseb_2.set('fieldLabels', {'CONSEIL_RE': 'inline label - visible with data', 'repb_Étiq': 'inline label - visible with data', 'repb_field': 'inline label - visible with data', 'repb_fie_1': 'inline label - visible with data', 'repb_fie_2': 'inline label - visible with data', 'Form_Tech': 'inline label - visible with data', 'img': 'header label - visible with data', });
lyr_reponseb_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});