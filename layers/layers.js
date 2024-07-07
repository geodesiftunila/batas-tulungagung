var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahDusun_2 = new ol.format.GeoJSON();
var features_WilayahDusun_2 = format_WilayahDusun_2.readFeatures(json_WilayahDusun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahDusun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahDusun_2.addFeatures(features_WilayahDusun_2);
var lyr_WilayahDusun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahDusun_2, 
                style: style_WilayahDusun_2,
                popuplayertitle: "Wilayah Dusun",
                interactive: true,
                title: '<img src="styles/legend/WilayahDusun_2.png" /> Wilayah Dusun'
            });
var format_JenisPenggunaanLahan_3 = new ol.format.GeoJSON();
var features_JenisPenggunaanLahan_3 = format_JenisPenggunaanLahan_3.readFeatures(json_JenisPenggunaanLahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisPenggunaanLahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisPenggunaanLahan_3.addFeatures(features_JenisPenggunaanLahan_3);
var lyr_JenisPenggunaanLahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenisPenggunaanLahan_3, 
                style: style_JenisPenggunaanLahan_3,
                popuplayertitle: "Jenis Penggunaan Lahan",
                interactive: true,
    title: 'Jenis Penggunaan Lahan<br />\
    <img src="styles/legend/JenisPenggunaanLahan_3_0.png" /> Pemakaman<br />\
    <img src="styles/legend/JenisPenggunaanLahan_3_1.png" /> Perkebunan<br />\
    <img src="styles/legend/JenisPenggunaanLahan_3_2.png" /> Permukiman<br />\
    <img src="styles/legend/JenisPenggunaanLahan_3_3.png" /> Persawahan<br />\
    <img src="styles/legend/JenisPenggunaanLahan_3_4.png" /> Vegetasi<br />'
        });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: "Bangunan",
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_4_0.png" /> Peribadatan<br />\
    <img src="styles/legend/Bangunan_4_1.png" /> Permukiman<br />'
        });
var format_BatasDusun_5 = new ol.format.GeoJSON();
var features_BatasDusun_5 = format_BatasDusun_5.readFeatures(json_BatasDusun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_5.addFeatures(features_BatasDusun_5);
var lyr_BatasDusun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_5, 
                style: style_BatasDusun_5,
                popuplayertitle: "Batas Dusun",
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_5.png" /> Batas Dusun'
            });
var format_JalanDesa_6 = new ol.format.GeoJSON();
var features_JalanDesa_6 = format_JalanDesa_6.readFeatures(json_JalanDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_6.addFeatures(features_JalanDesa_6);
var lyr_JalanDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_6, 
                style: style_JalanDesa_6,
                popuplayertitle: "Jalan Desa",
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_6.png" /> Jalan Desa'
            });
var format_JalanUtama_7 = new ol.format.GeoJSON();
var features_JalanUtama_7 = format_JalanUtama_7.readFeatures(json_JalanUtama_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtama_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtama_7.addFeatures(features_JalanUtama_7);
var lyr_JalanUtama_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtama_7, 
                style: style_JalanUtama_7,
                popuplayertitle: "Jalan Utama",
                interactive: false,
                title: '<img src="styles/legend/JalanUtama_7.png" /> Jalan Utama'
            });
var format_Fasilitas_8 = new ol.format.GeoJSON();
var features_Fasilitas_8 = format_Fasilitas_8.readFeatures(json_Fasilitas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_8.addFeatures(features_Fasilitas_8);
var lyr_Fasilitas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_8, 
                style: style_Fasilitas_8,
                popuplayertitle: "Fasilitas",
                interactive: true,
    title: 'Fasilitas<br />\
    <img src="styles/legend/Fasilitas_8_0.png" /> Masjid<br />\
    <img src="styles/legend/Fasilitas_8_1.png" /> Musholla<br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(true);lyr_WilayahDusun_2.setVisible(true);lyr_JenisPenggunaanLahan_3.setVisible(false);lyr_Bangunan_4.setVisible(true);lyr_BatasDusun_5.setVisible(true);lyr_JalanDesa_6.setVisible(true);lyr_JalanUtama_7.setVisible(true);lyr_Fasilitas_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_WilayahDusun_2,lyr_JenisPenggunaanLahan_3,lyr_Bangunan_4,lyr_BatasDusun_5,lyr_JalanDesa_6,lyr_JalanUtama_7,lyr_Fasilitas_8];
lyr_WilayahDusun_2.set('fieldAliases', {'Id': 'Id', });
lyr_JenisPenggunaanLahan_3.set('fieldAliases', {'id': 'id', 'Keterangan': 'Jenis Guna Lahan', });
lyr_Bangunan_4.set('fieldAliases', {'id': 'id', 'Fungsi': 'Fungsi', });
lyr_BatasDusun_5.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'Id': 'Id', });
lyr_JalanDesa_6.set('fieldAliases', {'id': 'id', 'Keterangan': 'Status Jalan', });
lyr_JalanUtama_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Fasilitas_8.set('fieldAliases', {'Id': 'Id', 'Jenis': 'Jenis Fasilitas', });
lyr_WilayahDusun_2.set('fieldImages', {'Id': 'Hidden', });
lyr_JenisPenggunaanLahan_3.set('fieldImages', {'id': 'Hidden', 'Keterangan': 'TextEdit', });
lyr_Bangunan_4.set('fieldImages', {'id': 'Hidden', 'Fungsi': 'TextEdit', });
lyr_BatasDusun_5.set('fieldImages', {'FID_Batas_': 'Hidden', 'Id': 'Range', });
lyr_JalanDesa_6.set('fieldImages', {'id': 'Hidden', 'Keterangan': 'TextEdit', });
lyr_JalanUtama_7.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Fasilitas_8.set('fieldImages', {'Id': 'Hidden', 'Jenis': 'TextEdit', });
lyr_WilayahDusun_2.set('fieldLabels', {});
lyr_JenisPenggunaanLahan_3.set('fieldLabels', {'Keterangan': 'inline label - always visible', });
lyr_Bangunan_4.set('fieldLabels', {'Fungsi': 'inline label - always visible', });
lyr_BatasDusun_5.set('fieldLabels', {'Id': 'header label - always visible', });
lyr_JalanDesa_6.set('fieldLabels', {'Keterangan': 'no label', });
lyr_JalanUtama_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Fasilitas_8.set('fieldLabels', {'Jenis': 'inline label - always visible', });
lyr_Fasilitas_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});