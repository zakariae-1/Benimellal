var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_Beni_Mellal_1 = new ol.format.GeoJSON();
var features_Beni_Mellal_1 = format_Beni_Mellal_1.readFeatures(json_Beni_Mellal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beni_Mellal_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Beni_Mellal_1.addFeatures(features_Beni_Mellal_1);cluster_Beni_Mellal_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Beni_Mellal_1
});var lyr_Beni_Mellal_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Beni_Mellal_1, 
                style: style_Beni_Mellal_1,
                title: '<img src="styles/legend/Beni_Mellal_1.png" /> Beni_Mellal'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Beni_Mellal_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Beni_Mellal_1];
lyr_Beni_Mellal_1.set('fieldAliases', {'NOM_RUE': 'NOM_RUE', 'VILLE': 'VILLE', 'N_RSDNCE': 'N_RSDNCE', 'NOM_RSDNCE': 'NOM_RSDNCE', 'LOCALISATI': 'LOCALISATI', 'NB_ETG': 'NB_ETG', 'POTENTIEL': 'POTENTIEL', 'NB_GRG_RDC': 'NB_GRG_RDC', 'NB_MNG_GLO': 'NB_MNG_GLO', 'SOUS_SOUL': 'SOUS_SOUL', 'COL_MNT': 'COL_MNT', 'ASCENCEUR': 'ASCENCEUR', });
lyr_Beni_Mellal_1.set('fieldImages', {'NOM_RUE': 'TextEdit', 'VILLE': 'TextEdit', 'N_RSDNCE': 'TextEdit', 'NOM_RSDNCE': 'TextEdit', 'LOCALISATI': 'TextEdit', 'NB_ETG': 'TextEdit', 'POTENTIEL': 'TextEdit', 'NB_GRG_RDC': 'TextEdit', 'NB_MNG_GLO': 'TextEdit', 'SOUS_SOUL': 'TextEdit', 'COL_MNT': 'TextEdit', 'ASCENCEUR': 'TextEdit', });
lyr_Beni_Mellal_1.set('fieldLabels', {'NOM_RUE': 'no label', 'VILLE': 'no label', 'N_RSDNCE': 'no label', 'NOM_RSDNCE': 'no label', 'LOCALISATI': 'no label', 'NB_ETG': 'no label', 'POTENTIEL': 'header label', 'NB_GRG_RDC': 'no label', 'NB_MNG_GLO': 'no label', 'SOUS_SOUL': 'no label', 'COL_MNT': 'no label', 'ASCENCEUR': 'no label', });
lyr_Beni_Mellal_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});