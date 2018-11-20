var infoDiv = null;
var drawTool = null;
var tool_ids={
    fix_tool:'fix_tool',
    panning_tool:'panning_tool',
    zoomout_tool:'zoomout_tool',
    sign_tool:'sign_tool',
    clean_tool:'clean_tool',
    distance_tool:'distance_tool',
    acreage_tool:'acreage_tool'
};
ol.control.MeasureControl = function (init_options) {
    var options = init_options || {};
    var toolid=options.toolid;
    var containerDiv = options.containerDiv;
    var geotype = options.geotype;
    var controlText = options.controlText;
    var olMap = options.map;
    var toolElement = document.createElement('div');
    var source=ssMap.drawLayer.getSource();
    infoDiv = options.infoDiv;

    toolElement.title = controlText;
    toolElement.className=options.className;
    var handleMeasure = function (evt) {
        on(evt.target);
        if (drawTool) {
            if(toolid!=tool_ids.clean_tool){
                drawTool.setActive(false);
                olMap.removeInteraction(drawTool);
                olMap.removeOverlay(helpTooltip);
                olMap.un('pointermove', pointerMoveHandler);
                drawTool = null;
            }
        }
        if (toolid == tool_ids.clean_tool||toolid==tool_ids.fix_tool||toolid==tool_ids.panning_tool) {
            source.clear(true);
            measureTooltip(false);
            $(infoDiv).text('');
            if(toolid==tool_ids.fix_tool){
                olMap.getView().fit(MapConfig.airports[apc3].extent,olMap.getSize());
            }
            if(toolid==tool_ids.panning_tool) {
                ssMap.addFeatureClick();
            }
              return;
        }
        if (toolid == tool_ids.acreage_tool || toolid == tool_ids.distance_tool || toolid == tool_ids.sign_tool || toolid == tool_ids.zoomout_tool) {
           ssMap.removeFeatureClick();
            if(ssMap.popupoverlay){
                ssMap.popupoverlay.setPosition(undefined);
                delete ssMap.currentPopup.popupid;
            }
            if (toolid == tool_ids.acreage_tool || toolid == tool_ids.distance_tool) {
                createHelpTooltip(olMap);
                olMap.on('pointermove', pointerMoveHandler);
            }
            if (geotype == 'LineString' || geotype == 'Polygon') {
                drawTool = new ol.interaction.Draw({
                    source: source,
                    type: geotype,
                    style: new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'orange',
                            lineDash: [10, 10],
                            width: 2
                        }),
                        image: new ol.style.Circle({
                            radius: 5,
                            stroke: new ol.style.Stroke({
                                color: 'rgba(0, 0, 0, 0.7)'
                            }),
                            fill: new ol.style.Fill({
                                color: 'rgba(255, 255, 255, 0.2)'
                            })
                        })
                    })
                });
            }
            else if (geotype === 'Box') {
                drawTool = new ol.interaction.DragBox({
                    source: source,
                    style: new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.5)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'orange',
                            lineDash: [10, 10],
                            width: 2
                        }),
                        image: new ol.style.Circle({
                            radius: 5,
                            stroke: new ol.style.Stroke({
                                color: 'rgba(0, 0, 0, 0.7)'
                            }),
                            fill: new ol.style.Fill({
                                color: 'rgba(255, 255, 255, 0.2)'
                            })
                        })
                    })
                });
            }

            drawTool.setActive(true);
            drawTool.on('drawstart', function (evt) {
                // set sketch
                sketch = evt.feature;
                source.clear();
                measureTooltip(false);
            }, this);

            drawTool.on('drawend', function (evt) {
                sketch = null;
            }, this);

            drawTool.on('boxstart', function (e) {
                source.clear();
            });

            drawTool.on('boxend', function (e) {
                var geometry = drawTool.getGeometry();
                source.addFeature(new ol.Feature({
                    geometry: geometry
                }));

                olMap.getView().fit(geometry, olMap.getSize());
            });

            drawTool.on('boxstart', function (e) {

            });

            olMap.addInteraction(drawTool);

        }
    };

    toolElement.removeEventListener('click',handleMeasure);
    toolElement.addEventListener('click', handleMeasure, false);
    containerDiv.appendChild(toolElement);

    ol.control.Control.call(this, {
        element: containerDiv,
        target: options.target
    });
    function on(elem){
        //if (toolid != tool_ids.clean_tool) {
            var e = $(elem);
            e.siblings().each(function () {
                var ee = $(this);
                var endStr = '_on';
                var onClassName = ee.attr('class');
                var d = onClassName.length - endStr.length;
                if (d > 0 && onClassName.lastIndexOf(endStr) == d) {
                    var offClassName = onClassName.substr(0, d) + '_off';
                    ee.removeClass(onClassName).addClass(offClassName);
                }
            });
            var endStr = '_off';
            var offClassName = e.attr('class');
            var d = offClassName.length - endStr.length;
            if (d > 0 && offClassName.lastIndexOf(endStr) == d) {
                var onClassName = offClassName.substr(0, d) + '_on';
                e.removeClass(offClassName).addClass(onClassName);
            }
        }
   // }
};

ol.inherits(ol.control.MeasureControl, ol.control.Control);

/**
 * Currently drawn feature.
 *
 * @type {ol.Feature}
 */
var sketch;

/**
 * The help tooltip element.
 *
 * @type {Element}
 */
var helpTooltipElement;

/**
 * Overlay to show the help messages.
 *
 * @type {ol.Overlay}
 */
var helpTooltip;


/**
 * Message to show when the user is drawing a polygon.
 * @type {string}
 */
var continuePolygonMsg = '点击继续或双击结束';


/**
 * Message to show when the user is drawing a line.
 * @type {string}
 */
var continueLineMsg = '点击继续或双击结束';

var wgs84Sphere = new ol.Sphere(6378137);
var  geodesicmeasures=true;
function createHelpTooltip(olMap) {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip';
    helpTooltipElement.onclick= function () {
      return false;
    };
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
        stopEvent:false
    });
    olMap.addOverlay(helpTooltip);
}

/**
 * Creates a new measure tooltip
 */
function measureTooltip(clear, text) {
    if (!clear) {
        $(infoDiv).html('');
    }
    else {
        $(infoDiv).html(text);
    }
}
var pointerMoveHandler = function (evt) {
    if (evt.dragging) {
        return;
    }
    /** @type {string} */
    var helpMsg = '点击鼠标开始测量';
    /** @type {ol.Coordinate|undefined} */
    var tooltipCoord = evt.coordinate;

    var this_ = this;
    if (sketch) {
        var output;
        var geom = (sketch.getGeometry());
        if (geom instanceof ol.geom.Polygon) {
            output = formatArea(geom);
            helpMsg = continuePolygonMsg;
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof ol.geom.LineString) {
            output = formatLength(geom,false);
            helpMsg = continueLineMsg;
            tooltipCoord = geom.getLastCoordinate();
        }
        measureTooltip(true, output);
    }

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(tooltipCoord);
};

/**
 * format length output
 *
 * @param {ol.geom.LineString}
 *            line
 * @return {string}
 */
var formatLength = function (line,cir) {
    var length;
    if (geodesicmeasures) {
        var coordinates = line.getCoordinates();
        length = 0;
        var sourceProj = 'EPSG:900913';
        for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
            var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
            var c2 = ol.proj.transform(coordinates[i + 1], sourceProj,'EPSG:4326');
            length += wgs84Sphere.haversineDistance(c1, c2);
//            if(cir&&coordinates.length>2&&(i+1== coordinates.length - 1)){
//                var c1 = ol.proj.transform(coordinates[i+1], sourceProj, 'EPSG:4326');
//                var c2 = ol.proj.transform(coordinates[0], sourceProj,'EPSG:4326');
//                length += wgs84Sphere.haversineDistance(c1, c2);
//            }
        }
    } else {
        length = Math.round(line.getLength() * 100) / 100;
    }
    var output;
    if (length > 1000) {
        output = '距离：'+(Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
    } else {
        output = '距离：'+(Math.round(length * 100) / 100) + ' ' + 'm';
    }
    return output;
};

/**
 * format length output
 *
 * @param {ol.geom.Polygon}
 *            polygon
 * @return {string}
 */
var formatArea = function (polygon) {
    var area;
    if (geodesicmeasures) {
        var sourceProj = 'EPSG:900913';
        var geom = /** @type {ol.geom.Polygon} */
            (polygon.clone().transform(sourceProj, 'EPSG:4326'));
        var coordinates = geom.getLinearRing(0).getCoordinates();
        area = Math.abs(wgs84Sphere.geodesicArea(coordinates));
    } else {
        area = polygon.getArea();
    }
    var output;
    if (area > 10000) {
        output ='面积：'+ (Math.round(area / 1000000 * 100) / 100) + ' '
        + 'km<sup>2</sup>';
    } else {
        output ='面积：'+ (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>';
    }

    var  line=new ol.geom.LineString( polygon.getCoordinates()[0]);
    var lineout=formatLength(line,true);
    return lineout+';'+output;
};