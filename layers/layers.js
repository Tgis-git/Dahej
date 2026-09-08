var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_LISS4_06_04_2026_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_06_04_2026<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_06_04_2026_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_13_11_2025_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_13_11_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_13_11_2025_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_18_03_2025_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_18_03_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_18_03_2025_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_06_11_2024_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_06_11_2024<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_06_11_2024_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_11_03_2024_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_11_03_2024<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_11_03_2024_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_24_11_2023_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_24_11_2023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_24_11_2023_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_29_03_2023_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_29_03_2023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_29_03_2023_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_27_11_2020_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_27_11_2020<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_27_11_2020_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_LISS4_01_04_2020_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LISS4_01_04_2020<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LISS4_01_04_2020_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8072938.315641, 2479525.111047, 8078026.158001, 2488081.718994]
        })
    });
var lyr_PaniyadraSite2_Ortho_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PaniyadraSite2_Ortho',
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PaniyadraSite2_Ortho_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8075879.579782, 2486030.612739, 8076801.309026, 2487528.037956]
        })
    });
var lyr_Site3_Ortho_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Site3_Ortho',
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Site3_Ortho_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8074435.293600, 2481847.316967, 8074783.910649, 2482332.934711]
        })
    });
var lyr_Site1_Ortho_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Site1_Ortho',
        
        source: new ol.source.ImageStatic({
            url: "./layers/Site1_Ortho_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8074204.145192, 2480627.153896, 8074736.447786, 2481896.012273]
        })
    });
var format_ShorelineRates20202026Inmyear_15 = new ol.format.GeoJSON();
var features_ShorelineRates20202026Inmyear_15 = format_ShorelineRates20202026Inmyear_15.readFeatures(json_ShorelineRates20202026Inmyear_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShorelineRates20202026Inmyear_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShorelineRates20202026Inmyear_15.addFeatures(features_ShorelineRates20202026Inmyear_15);
var lyr_ShorelineRates20202026Inmyear_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShorelineRates20202026Inmyear_15, 
                style: style_ShorelineRates20202026Inmyear_15,
                popuplayertitle: 'Shoreline Rates (2020-2026) (In m/year)',
                interactive: true,
    title: 'Shoreline Rates (2020-2026) (In m/year)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_0.png" /> High Erosion (-39.6 - -5)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_1.png" /> Moderate Erosion (-5 - -3)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_2.png" /> Low Erosion (-3 - -0.5)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_3.png" /> Stable Coast (-0.5 - 0.5)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_4.png" /> Low Accretion (0.5 - 3)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_5.png" /> Moderate Accretion (3 - 5)<br />\
    <img src="styles/legend/ShorelineRates20202026Inmyear_15_6.png" /> High Accretion (5 - 14.3)<br />' });
var format_Sites_16 = new ol.format.GeoJSON();
var features_Sites_16 = format_Sites_16.readFeatures(json_Sites_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sites_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_16.addFeatures(features_Sites_16);
var lyr_Sites_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_16, 
                style: style_Sites_16,
                popuplayertitle: 'Sites',
                interactive: true,
    title: 'Sites<br />\
    <img src="styles/legend/Sites_16_0.png" /> Site 1 - Dahej<br />\
    <img src="styles/legend/Sites_16_1.png" /> Site 2 - Paniyadra<br />\
    <img src="styles/legend/Sites_16_2.png" /> Site 3 - Dahej<br />' });
var group_FCC = new ol.layer.Group({
                                layers: [lyr_LISS4_06_04_2026_3,lyr_LISS4_13_11_2025_4,lyr_LISS4_18_03_2025_5,lyr_LISS4_06_11_2024_6,lyr_LISS4_11_03_2024_7,lyr_LISS4_24_11_2023_8,lyr_LISS4_29_03_2023_9,lyr_LISS4_27_11_2020_10,lyr_LISS4_01_04_2020_11,],
                                fold: 'close',
                                title: 'FCC'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LISS4_06_04_2026_3.setVisible(true);lyr_LISS4_13_11_2025_4.setVisible(false);lyr_LISS4_18_03_2025_5.setVisible(false);lyr_LISS4_06_11_2024_6.setVisible(false);lyr_LISS4_11_03_2024_7.setVisible(false);lyr_LISS4_24_11_2023_8.setVisible(false);lyr_LISS4_29_03_2023_9.setVisible(false);lyr_LISS4_27_11_2020_10.setVisible(false);lyr_LISS4_01_04_2020_11.setVisible(false);lyr_PaniyadraSite2_Ortho_12.setVisible(false);lyr_Site3_Ortho_13.setVisible(false);lyr_Site1_Ortho_14.setVisible(false);lyr_ShorelineRates20202026Inmyear_15.setVisible(true);lyr_Sites_16.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,group_FCC,lyr_PaniyadraSite2_Ortho_12,lyr_Site3_Ortho_13,lyr_Site1_Ortho_14,lyr_ShorelineRates20202026Inmyear_15,lyr_Sites_16];
lyr_ShorelineRates20202026Inmyear_15.set('fieldAliases', {'baselineid': 'baselineid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'wlr': 'wlr', 'wr2': 'wr2', 'wci': 'wci', 'wse': 'wse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', });
lyr_Sites_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id2': 'id2', 'area': 'area', });
lyr_ShorelineRates20202026Inmyear_15.set('fieldImages', {'baselineid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'wlr': 'TextEdit', 'wr2': 'TextEdit', 'wci': 'TextEdit', 'wse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', });
lyr_Sites_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id2': 'TextEdit', 'area': 'TextEdit', });
lyr_ShorelineRates20202026Inmyear_15.set('fieldLabels', {'baselineid': 'hidden field', 'transorder': 'inline label - always visible', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'inline label - always visible', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'wlr': 'hidden field', 'wr2': 'hidden field', 'wci': 'hidden field', 'wse': 'hidden field', 'epr': 'inline label - always visible', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', });
lyr_Sites_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id2': 'hidden field', 'area': 'hidden field', });
lyr_Sites_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});