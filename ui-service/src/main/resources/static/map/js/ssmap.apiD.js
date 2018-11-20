var CoordinateTransform = {
    /**
     * 坐标变换
     *正向投影:经纬度坐标投影到墨卡托坐标需要逆向旋转
     *反向投影:墨卡托坐标投影到经纬度坐标需要正向旋转
     * @param apc
     *            机场三码
     * @param x
     *            坐标 x
     * @param y
     *            坐标 y
     * @param reverse
     *            true/false, 是否反向投影( true：反向投影；false:正向投影)
     * @return 变换后的坐标
     */
    transform: function (apc, x, y, reverse) {
        if (typeof apc != "string" || MapConfig.airports[apc] == null) {
            return [NaN, NaN];
        }
        var airport = MapConfig.airports[apc];
        if (airport == null) {
            return [NaN, NaN];
        }
        if (reverse) {//反向计算
            var point = this.rotate(apc, x, y, true);
            return this.project(point[0], point[1], false);
            
            
        } else {//正向计算
            var point = this.project(x, y, true);
            return this.rotate(apc, point[0], point[1], false);
        }
    },

    /**
     * 坐标旋转
     *
     * @param apc
     *            机场三码
     * @param x
     *            坐标 x
     * @param y
     *            坐标 y
     * @param reverse
     *            true/false, 旋转方向(true:顺时针为正向旋转，false:逆时针为反向旋转  )
     * @return 旋转后的坐标
     */
    rotate: function (apc, x, y, reverse) {
        if (typeof apc != "string" || MapConfig.airports[apc] == null
            || isNaN(x) || isNaN(y)) {
            return [NaN, NaN];
        }
        var airport = MapConfig.airports[apc];

        var angle = reverse ? airport.angle : -airport.angle;
        var center = airport.center;
        return [
            (x - center[0]) * Math.cos(angle) - (y - center[1])
            * Math.sin(angle) + center[0],
            (x - center[0]) * Math.sin(angle) + (y - center[1])
            * Math.cos(angle) + center[1]];
    },

    /**
     * 投影转换
     *
     * @param x
     *            坐标 x
     * @param y
     *            坐标 y
     * @param toGM
     *            true/false, 投影方向（true：经纬度到墨卡托投影，false：墨卡托到经纬度投影）
     * @return 投影后的坐标
     */
    project: function (x, y, reverse) {
        if (!isNaN(x) && !isNaN(y)) {
            var point;
            if (reverse) {
                point = ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857');
            } else {
                point = ol.proj.transform([x, y], 'EPSG:3857', 'EPSG:4326');
            }
            return point;
        }
        return [NaN, NaN];
    }
};
/**
 * 地图对象
 * @param containerId
 * @param apc
 * @constructor
 */
var SSMap = function (containerId, apc) {
    this.container = document.getElementById(containerId);
    // 当前信息窗口
    this.currentPopup = {
        popupid: null,
        layername:null
    };
    this.markers = {};// 标注集合
    this.linePoints = {}; // 线集合
    this.markerLayerSet = null;// 标注图层
    this.userLayers = {}; // 用户自定义图层

    if (!this.container) {
        return;
    }

    if (this.container.offsetWidth < 100) {
        this.container.style.width = "100px";
    }
    if (this.container.offsetHeight < 100) {
        this.container.style.height = "100px";
    }
    this.apc = (apc || "pek").toUpperCase();
    this.showPostionDiv = null;
    this.popupContentDiv=null;
    this.popupoverlay = null;
    this.view = null;
    this.controls = null;
    this.layers = null;
    this.routeLayer=null;
    this.drawLayer=null;
    this.show = function () {
        if (this._show) {
            this.show = this._show;
            this.show();
        } else {
            delayLoad(this);
        }
    };

    function delayLoad(parent) {
        window.setTimeout(function () {
            if (parent._show) {
                parent.show = parent._show;
                parent.show();
            } else {
                delayLoad(parent);
            }
        }, 100);
    }

};
/**
 * 初始化地图
 * @private
 */
SSMap.prototype._show = function () {
    if (!this.container || this.olMap || !MapConfig.airports
        || !MapConfig.airports[this.apc]) {
        console.log('地图参数配置错误，请检查');
        return;
    }

    var mapInfo = "<div id='mapInfo'>"
        + "<span id='airport' class='infoText'></span>"
        + "<span id='coordinate' class='infoText'></span>"
        + "<span id='length' class='infoText'></span>"
        + "<span id='area' class='infoText'></span>"
        + "<span id='fltPos' class='infoText'></span></div>";
    this.container.innerHTML += mapInfo;
    var mapheight = this.container.offsetHeight;
    var maptop = this.container.offsetTop;
    $("#mapInfo").css("top", maptop + mapheight - 55 + "px");
    $("#mapCompass").attr({src:MapConfig.airports[this.apc].compass});

    var this_ = this;
    var airport = MapConfig.airports[this.apc];
    var extent = airport.extent;

    this.view = new ol.View({
        projection: 'EPSG:900913',// 墨卡托投影
        center: airport.center,// 地图中心点
        extend: airport.extent,// 四至
        // maxResolution: airport.maxResolution
        maxZoom: airport.maxZoomlevel,// 最大级别
        minZoom: airport.minZoomLevel,// 最小级别
        zoom: airport.defaultZoom
    });

    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: function(coordinate){
            /**
             * 显示鼠标指示处的坐标
             */
            var point = CoordinateTransform.transform(this_.apc, coordinate[0], coordinate[1], true);
            return point[0].toFixed(6)+";"+point[1].toFixed(6);
        },
        projection: 'EPSG:3857',
        className: 'custom-mouse-position',
        target: document.getElementById(this.showPostionDiv),
        undefinedHTML: '&nbsp;'
    });

    this.controls = ol.control.defaults({
        attribution: false
    }).extend(
        [new ol.control.ZoomSlider(),
            new ol.control.ScaleLine(),
            new ol.control.LayerSwitcher({
                tipLabel:'图层控制'
            }),
            mousePositionControl
        ]);
    this.overlayGroup = new ol.layer.Group({
        title: '业务图层',
        layers: [
        ]
    });
    this.layers = [
        new ol.layer.Group({
            title: '基础地图',
            layers: [
                new ol.layer.Tile({
                    title:airport.layers[0].name,
                    source: new ol.source.XYZ({
                        attributions: [new ol.Attribution({
                            html: airport.title
                        })],
                        url: airport.layers[0].tileUrl
                    })
                })
            ]
        }),
        this.overlayGroup
    ];

    this.olMap = new ol.Map({
        target: this.container,
        view: this.view,
        controls: this.controls,
        layers: this.layers
    });

    this.markerLayerSet=new ol.layer.Vector({
        source:new ol.source.Vector()
    });
    this.olMap.addLayer(this.markerLayerSet);
    this._createPopupOverlay();
    this._changeMapResolution();
    this.view.fit(airport.extent,this.olMap.getSize());

};


/**
 * 获取标注
 * @param id 要素ID
 */
SSMap.prototype.getMarker = function (id) {
    var marker = null;
    if (id == null) {
        return null;
    }
    marker = this.markers[id];
    if (marker == null || marker == undefined) {
        return null;
    } else
        return marker;
};

/**
 * 获取包含键值的所有的标注
 * @param key 键名称
 * @param val 键值
 
 */
SSMap.prototype.getMarkerByKey = function (key,val) {
    if(val==undefined||val==""){
        return  null
    }
    var markers=[];
    var mks = this.markers;
    for (var m in mks) {
        var mk = mks[m];
        if (mk) {
           if(mk.properties[key]==val) {
               markers.push(mk);
               //break;
           }
        }
    }
    return markers;
};

/**
 * 地图中创建新图层
 * @param layername 图层代码
 * @param title 图层名称
 * @param minZoom  最新显示级别
 */
SSMap.prototype.addLayer = function (layername, title, minZoom) {
    var this_=this;
    if (!this.userLayers[layername]) {
        var source = new ol.source.Vector();
        var layer = new ol.layer.Vector({
            source: source,
            name:layername,
            title: title,
            zoom: minZoom,
            type:'base'
        });
        this.userLayers[layername] = {
            name: layername,
            title: title,
            layer: layer,
            zoom: minZoom
        };
        this.overlayGroup.getLayers().push(layer);
    } else { // 已经存在
        if (this.userLayers[name].zoom != minZoom) {
            this.userLayers[name].zoom = minZoom;
        }
        if (this.userLayers[name].title != title) {
            this.userLayers[name].title = title;
        }
    }
    layer.on('change:visible',function(evt){
        if(this_.popupoverlay.get('layername')==layername){
            this_.popupoverlay.setPosition(undefined);
            delete this_.currentPopup.popupid;

        }
    });
    this._switchLayers(this);
    return layer;
};
/**
 * 根据图层代码获取图层
 * @param layername 图层代码
 * @returns
 */
SSMap.prototype.getLayer=function(layername){
    var userLayer=this.userLayers[layername];
    if(userLayer){
        return userLayer.layer;
    }
    else
    return null;

};
/**
 * 切换地图级别时，设置图层是否显示
 * @private
 */
SSMap.prototype._switchLayers=function() {
    var keys = Object.keys(this.userLayers);
    if (keys.length > 0) {
        for (var i = 0; i < keys.length; i++) {
            var val = this.userLayers[keys[i]];
            if (this.view.getZoom() >= val.zoom) {
                val.layer.setVisible(true);
            } else {
                val.layer.setVisible(false);
            }
        }
    }
};

/**
 * 检查标注是否存在
 *
 * @param id 要素ID
 */
SSMap.prototype.containMarker = function (id) {
    if (id == null) {
        return null;
    }
    if (this.markers[id]) {
        return true;
    } else {
        return false;
    }
};
/**
 * 删除图层下所有的标注
 * @param layername 图层代码
 */
SSMap.prototype.removeMarkers=function(layername){
    var userLayer=this.userLayers[layername];
    if(userLayer) {
        userLayer.layer.getSource().clear();
        if (this.popupoverlay.get('layername') == layername) {
            this.popupoverlay.setPosition(undefined);
            delete this.currentPopup.popupid;
        }
        for(var i in this.markers){
            if(this.markers[i].layer ==layername) {
                this.markers[i].destroy();
                delete  this.markers[i];
            }
        }
        userLayer.layer.getSource().changed();
    }
};
/**
 * 删除图层中单个标注
 * @param id 要输id
 * @param layername 图层代码
 */
SSMap.prototype.deleteMarker = function (id, layername) {
    if (layername) { // 指定图层
        if (id == null) {
            this.removeMarkers(layername);
        } else {
            var marker = this.getMarker(id);
            if (marker) {
                this.userLayers[layername].layer.getSource().removeFeature(marker.feature);
                this.userLayers[layername].layer.getSource().changed();
                // 清除弹出框
                this.hidePopup(marker.mid);
                marker.destroy();
                delete this.markers[id];
            }
        }
    } else {
        if (id == null) {
            var keys = Object.keys(this.markers);
            if (keys) {
                for (var i = 0; i < keys.length; i++) {
                    var marker = this.getMarker(keys[i]);
                    if (marker) {
                        this.markerLayerSet.getSource().removeFeature(marker.feature);
                        // 清除弹出框
                        this.hidePopup(marker.mid);
                        marker.destroy();
                    }
                }
            }
            this.markers = {};
        } else {
            var marker = this.getMarker(id);
            if (marker) {
                this.markerLayerSet.getSource().removeFeature(marker.feature);
                // 清除弹出框
                this.hidePopup(marker.mid);
                marker.destroy();
                delete this.markers[id];
            }
        }
    }
};

/**
 * 历史轨迹样式
 * @type {*[]}
 */
SSMap.prototype.routeStyles = [
    new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.1)'
        })
    }),
    new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: 'orange'
            })
        }),
        geometry: function(feature) {
            var coordinates = feature.getGeometry().getCoordinates();
            return new ol.geom.MultiPoint(coordinates);
        },
        zIndex:99
    })
];
/**
 * 删除轨迹线
 */
SSMap.prototype.deleteLine = function (id, sequence) {
    if (id == null) {
        this.routeLayer.getSource().clear({
            fast:true
        });
        this.linePoints = {};
        return;
    }

    if (sequence == null) {
        var pArray = this.linePoints[id];
        if (pArray == null) {
            return;
        }
        var length = pArray.length;
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                var fid = id + "_" + i;
                var f = this.routeLayer.getSource().getFeatureById(fid);
                if (f) {
                    this.routeLayer.getSource().removeFeature(f);
                }

            }
            this.linePoints[id] = null;
        }
        return;
    }
    if (sequence != null) {
        var pArray = this.linePoints[id];
        if (pArray == null) {
            return;
        }
        var length = pArray.length;
        var pointsize = 0;
        var check = false;
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                if (!check) {
                    var points = pArray[i];
                    if (points.length > 2) {
                        pointsize += points.length;
                        if (pointsize > sequence) {
                            pArray.splice(i + 1, length - i);
                            // this.linePoints[id].splice(i,length-i);
                            check = true;
                        }
                    }
                }
                if (check) {
                    var fid = id + "_" + i;
                    var f = this.routeLayer.getSource().getFeatureById(fid);
                    if (f) {
                        this.routeLayer.getSource().removeFeature(f);
                    }

                }
            }
        }
    }

    var poits = this.linePoints[id][this.linePoints[id].length - 1];
    if (poits != null) {
        poits.splice(sequence + 1, poits.length - sequence);
        if (poits.length == 1) { // 最开始的那个点，需要清除
            poits.splice(0, 1);
        }
        if (poits.length >= 2) {
            var line = new ol.geom.LineString(poits);
            var vline = new ol.Feature();
            vline.setGeometry(line);
            vline.setStyle(this.routeStyles);
            var lineid = id + "_" + (this.linePoints[id].length - 1); // 设置id
            vline.id = lineid;
            vline.setId(lineid);
            var f = this.routeLayer.getSource().getFeatureById(fid);
            if (f) {
                vline.__uvi = f.__uvi;
                this.routeLayer.getSource().removeFeature(f);
            } else {
                vline.__uvi = Object.keys(this.linePoints).indexOf(id, 0);
            }
            this.routeLayer.getSource().addFeatures([vline]);
        }

    }

};

/**
 * 画轨迹线
 *
 * @param latlon
 *            坐标
 * @param trans
 *            是否投影
 * @param id
 * @param newstart
 *            开始位置
 * @returns
 */
SSMap.prototype.drawLine = function (latlon, trans, id, newstart) {
    if (id == null || latlon == null || latlon == []) {
        return null;
    }
    var points;
    var dashpoits = null;
    var pArray = this.linePoints[id];
    if (pArray == null) {
        newstart = false;
        points = [];
        pArray = [];
        this.linePoints[id] = pArray;
        pArray.push(points);
    } else {
        if (newstart) {
            points = [];
            dashpoits = [];
            var pslast = pArray[pArray.length - 1];
            var p = pslast[pslast.length - 1];
            dashpoits.push(p);
            pArray.push(dashpoits);

            pArray.push(points);
        } else {
            points = pArray[pArray.length - 1];
        }
    }
    for (var i = 0; i < latlon.length; i++) {
        var ll = latlon[i];
        if (trans) {
            ll = CoordinateTransform.transform(this.apc, ll[0], ll[1],false);
        }
        points.push(ll);
        if (newstart && (dashpoits != null)) {
            if (i == 0) {
                dashpoits.push(ll);
            }
        }
    }
    if (dashpoits != null) {
        if (dashpoits.length >= 2) {
            var dashline = new ol.geom.LineString(dashpoits);
            var vdashline = new ol.Feature();
            vdashline.setGeometry(dashline);
            vdashline.setStyle(this.routeStyles);
            var dashlineid = id + "_" + (pArray.length - 2); // 设置id
            vdashline.id = dashlineid;
            vdashline.setId(dashlineid);
            var f = this.routeLayer.getSource().getFeatureById(dashlineid);
            if (f) {
                vdashline.__uvi = f.__uvi;
                vdashline.__dashed = true;
                this.routeLayer.getSource().removeFeature(f);
            } else {
                vdashline.__uvi = Object.keys(this.linePoints).indexOf(
                    id, 0);
                vdashline.__dashed = true;
            }
            this.routeLayer.getSource().addFeatures([vdashline]);
        }
    }
    if (points.length >= 2) {
        var line = new ol.geom.LineString(points);
        var vline = new ol.Feature();
      //  line.setCoordinates(points);
        vline.setGeometry(line);
        vline.setStyle(this.routeStyles);
        var lineid = id + "_" + (pArray.length - 1); // 设置id
        vline.id = lineid;
        vline.setId(lineid);
        var f = this.routeLayer.getSource().getFeatureById(lineid);
        if (f) {
            vline.__uvi = f.__uvi;
            this.routeLayer.getSource().removeFeature(f);
        } else {
            vline.__uvi = Object.keys(this.linePoints).indexOf(id, 0);
        }
        this.routeLayer.getSource().addFeatures([vline]);
    }
};
/**
 * 添加或者更新点标注
 *
 * @param options.coordinate
 *            标注的经纬度坐标
 * @param options.trans
 *            true/false, 是否进行坐标变换
 * @param options.prop
 *            标注的属性
 * @param options.iconUrl
 *            标注图标的 url
 * @param options.iconSize
 *            标注图标的大小
 * @param options.resetMarkerIconSize
 *            图标大小地图随动
 * @param options.defaultTimeOut
 *            离线时间
 * @param options.timeoutFunction
 *            离线方法
 * @param options.display
 *            是否显示
 * @param options.layer
 *            画在指定的图层上
 * @param options.angle
 *            图标角度
 *
 * @return 标注
 */
SSMap.prototype.drawMarker = function (options) {
    var coordinate = options.coordinate,
        trans = options.trans,
        prop = options.prop,
        display = options.display,
        layer = options.layer;
    if (this.apc == null) {
        return null;
    }
    if (!prop || typeof prop.id != "string") {
        return null;
    }

    if (trans) {
        coordinate = CoordinateTransform.transform(this.apc, coordinate[0], coordinate[1],false);
        options.coordinate = coordinate;
    }
    var marker = this.getMarker(prop.id);
    if (marker) {
       marker.updateMarker(options);
        if (this.currentPopup.popupid && this.currentPopup.popupid == marker.popupid) {
            if (!prop.showfunction) {
                this._setPopupContent(marker.feature);
            }
        }
    } else {
        if (display == undefined) {
            options.display = true; // 默认显示图标注记文字
        }
        marker = new LabelMarker(options);
        if (layer == null || layer == undefined) {
            if (this.markerLayerSet != null) {
                this.markerLayerSet.getSource().addFeature(marker.feature);
            }
        } else {
            if (this.userLayers[layer]) {
                this.userLayers[layer].layer.getSource().addFeature(marker.feature);
            }
        }
    }
    this.markers[prop.id] = marker; // 保存图标注记
    return marker;
};

/**
 * 更改marker的位置
 * @param id
 * @param coordinate[lon, lat]
 */
SSMap.prototype.updateMarkerPosition = function(id, coordinate) {
	if(id == null) {
		return;
	}
	if(coordinate == null) {
		return;
	}
	var marker = this.getMarker(id);
	if(marker) {
		var xy = CoordinateTransform.transform(ssMap.apc, coordinate[0], coordinate[1], false);
		marker.updateCoodiante(xy);
	}
};

/**
 * 更新marker的样式
 * @param id
 * @param style
 */
SSMap.prototype.updateMarkerStyle = function(id, style) {
	if(id == null) {
		return;
	}
	if(style == null) {
		return;
	}
	var marker = this.getMarker(id);
	if(marker) {
		marker.feature.setStyle(style);
	}
};

/**
 * 添加或者更新线标注
 * @param options
 * @returns
 */

SSMap.prototype.drawLineMarker = function (options) {
    var points = options.points,
        trans = options.trans,
        prop = options.prop,
        display = options.display,
        layer = options.layer;
    if (this.apc == null) {
        return null;
    }
    if (!prop || typeof prop.id != "string") {
        return null;
    }

    if (trans) {
    	for(var i=0;i<points.length;i++){
    		var p=points[i];
    		var coordinate = CoordinateTransform.transform(this.apc, p[0], p[1],false);
    		points[i]=coordinate;
    	}
        options.points = points;
    }
    var marker = this.getMarker(prop.id);
    if (marker) {
       marker.updateMarker(options);
        if (this.currentPopup.popupid && this.currentPopup.popupid == marker.popupid) {
            if (!prop.showfunction) {
                this._setPopupContent(marker.feature);
            }
        }
    } else {
        if (display == undefined) {
            options.display = true; // 默认显示图标注记文字
        }
        marker = new LabelMarker(options);
        if (layer == null || layer == undefined) {
            if (this.markerLayerSet != null) {
                this.markerLayerSet.getSource().addFeature(marker.feature);
            }
        } else {
            if (this.userLayers[layer]) {
                this.userLayers[layer].layer.getSource().addFeature(marker.feature);
            }
        }
    }
    this.markers[prop.id] = marker; // 保存图标注记
    return marker;
};

/**
 * 检查marker的位置与传入的位置是否相同
 */
SSMap.prototype.checkMarkerPosition = function (id, lon, lat, trans) {
    var lonlat = null;
    var marker = this.getMarker(id);
    if (marker == null) {
        return false;
    }
    if (trans) {
        var point = CoordinateTransform.transform(this.apc, lon, lat,false);
        lonlat = new ol.Coordinate([point[0], point[1]]);
    } else {
        lonlat = new ol.Coordinate([lon, lat]);
    }

    if (lonlat.lon == marker.coordinate[0] && lonlat.lat ==  marker.coordinate[1]) {
        return true;
    } else {
        return false;
    }

};

/**
 *显示弹窗口，并显示自定义html内容
 * @param id 要素ID
 * @param html 自定义html
 */
SSMap.prototype.showPopup = function (id, html) {
    if (id == null || id == undefined)
        return;
    if (html == null || html == undefined)
        return;
    var popupid = this.getMarker(id).popupid;

    if (this.currentPopup.popupid && this.currentPopup.popupid != popupid) {
        this.popupoverlay.setPosition(undefined);
    }

    if (popupid != null && popupid != undefined) {
        $(".ol-overlaycontainer-stopevent").css('z-index', 100);
        this.currentPopup.popupid = popupid;
        var geometry = this.getMarker(id).feature.getGeometry();
        var position=null;
        if(geometry instanceof ol.geom.Point){       	
        	position= geometry.getCoordinates();
        }
        else if(geometry instanceof ol.geom.LineString){
        	var points=geometry.getCoordinates();
        	var length=points.length;
        	if(length==2){
        		position=[(points[0][0]+points[1][0])/2,(points[0][1]+points[1][1])/2];
        	}else{
        		
        		position=points[points.length/2]
        	}
        } else if(geometry instanceof ol.geom.Polygon) {
        	position = ol.extent.getCenter(geometry.getExtent());
        }
        this.popupoverlay.setPosition(position);
        var content = $("#"+this.popupContentDiv);
        content.html(html);
    }
};

/**
 *显示弹窗口,自定义位置，并显示自定义html内容
 * @param id 要素ID
 * @param html 自定义html
 */
SSMap.prototype.showPopupAtPosition = function (coordinate, html) {
    if (coordinate != null && coordinate != undefined) {
        $(".ol-overlaycontainer-stopevent").css('z-index', 100);
        this.popupoverlay.setPosition(coordinate);
        var content = $("#"+this.popupContentDiv);
        content.html(html);
  }
};

/**
 * 隐藏标注的弹出框
 * @param id
 *        要素id
 */
SSMap.prototype.hidePopup=function(id){
    if (id&&this.currentPopup.popupid == id) {
        this.popupoverlay.setPosition(undefined);
        delete  this.currentPopup.popupid;
    }
};
/**
 * 更新标注的弹出框内容
 * @param id
 *        要素id
 */
SSMap.prototype.updatePopup = function (id) {
    if(id ==this.currentPopup.popupid) {
        var marker = this.getMarker(id);
        if (marker) {
            this._setPopupContent(marker.feature);
        }
    }
};

/**
 * 控制显示或者隐藏标注
 *
 * @param id
 *            要素id，为空则是操作所有marker
 * @param display
 *            true：显示， false：隐藏
 */
SSMap.prototype.displayMarker = function (id, display) {
    if (id == null || id == "") {
        var mks = this.markers;
        for (var m in mks) {
            var marker = mks[m];
            if (marker) {
                if (!display) {
                  this.hidePopup(marker.mid);
                }
                marker.display(display);
            }

        }

    } else {
        var marker = this.getMarker(id);
        if (marker) {
            if ( !display) {
                this.hidePopup(marker.mid);
            }
            marker.display(display);
        }

    }

};

/**
 * 移动地图到某个标注，并设置其坐标为中心点
 *
 * @param id 
 *            要素id
 * @param zoom
 *            地图级别
 */
SSMap.prototype.panToMarker = function (id, zoom) {
    var marker = this.getMarker(id);
    if (marker != null) {
        var feature = marker.feature;
        var coordinate=marker.coordinate;
        zoom = zoom || this.view.getZoom();
        zoom = zoom>=17?zoom:17;
        marker.display(true);
        var pan = ol.animation.pan({
            duration: 1000,
            source: /** @type {ol.Coordinate} */ (this.view.getCenter())
        });
        //this.olMap.beforeRender(pan);
        this._setPopupContent(feature);
        this.view.setZoom(zoom);
        this.view.setCenter(coordinate);

    }
};



/**
 * 改变地图大小
 * @param width 
 * @param height
 */
SSMap.prototype.resize = function (width, height) {
    var viewReport=this.olMap.getViewport();
    viewReport.width=width||viewReport.width;
    viewReport.height=height||viewReport.height;
    this.olMap.updateSize();
};




/**
 * 设置地图级别及其中心点
 *
 * @param zoom   地图级别
 * @param center 地图中心点
 */
SSMap.prototype.zoomTo = function (zoom, center) {
    if (this.olMap && typeof zoom == "number" && zoom >= 14 && zoom <19) {
        if (center == null || center == undefined) {
            this.view.setZoom(zoom);
        } else {
            this.view.setZoom(zoom);
            this.view.setCenter(center);
        }
    }
};

/**
 * 移动地图到某个标注，并自动适应地图视野
 *
 * @param id
 *            //要素ID
 */
SSMap.prototype.zoomToFeature = function(id) {
	if (this.olMap) {
		var marker = this.getMarker(id);
		if (marker) {
			var feature = marker.feature;
			this.view.fit(feature.getGeometry(),this.olMap.getSize());
		}
	}
};

SSMap.prototype.setZoomAndCenter = function(id, zoom) {
	var marker = this.getMarker(id);
	if(marker) {
		var coordinate = marker.coordinate;
		this.view.setCenter(coordinate);
		this.view.setZoom(zoom);
	}
};


/**
 * 改变地图鼠标指针样式
 * 
 * @private
 */
SSMap.prototype._changeMapCursor = function () {
    var this_ = this;
    this.pointermoveKey=this.olMap.on('pointermove', function (evt) {
        if (evt.dragging) {
            this_.container.style.cursor = 'move';
            return;
        }
        var pixel = this_.olMap.getEventPixel(evt.originalEvent);
        var hit = this_.olMap.hasFeatureAtPixel(pixel);
        if (hit) {
            this_.container.style.cursor = 'pointer';
        } else {
            this_.container.style.cursor = '';
        }
    });
};
/**
 *创建通用弹出框
 *@private
 */
SSMap.prototype._createPopupOverlay = function () {
    this.popupContentDiv='popup-content';
    var container = document.createElement('div');
    container.id='popup';
    container.className='ol-popup';
    this.container.appendChild(container);
    var closer = document.createElement('a');
    closer.id='popup-closer';
    closer.className='ol-popup-closer';
    closer.href='#';
    container.appendChild(closer);
    var content = document.createElement('div');
    content.id='popup-content';
    content.className='ol-popup-content';
    container.appendChild(content);
    var this_ = this;
    closer.onclick = function () {
        this_.popupoverlay.setPosition(undefined);
        this_.popupoverlay.set('state', 'hide');
        delete  this_.currentPopup.popupid;
        closer.blur();
        return false;
    };
    this.popupoverlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250// 当Popup超出地图边界时，为了Popup全部可见，地图移动的速度. 单位为毫秒（ms）
        },
        offset: [0, 0]
    });
    this.olMap.addOverlay(this.popupoverlay);
    this.addFeatureClick();

};
/**
 * 添加地图要素点击事件
 */
SSMap.prototype.addFeatureClick=function(){
    var this_=this;
    this.popupclickkey=this.olMap.on('click', function (evt) {
        var feature = this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
            if(feature.get('showpopup')==true)
                return feature;
            else
                return null;
        });
        this_._setPopupContent(feature);
    });
    this_._changeMapCursor();
};
/**
 * 移除地图要素点击事件
 */
SSMap.prototype.removeFeatureClick=function(){
    this.olMap.unByKey(this.popupclickkey);
    this.olMap.unByKey(this.pointermoveKey);
    this.container.style.cursor='crosshair';
};

/**
 * 根据feature设置弹出窗口的显示内容
 * @param feature 地图要素
 * @private
 */
SSMap.prototype._setPopupContent = function(feature) {
	if (feature) {
		var showFunction = feature.get('showFunction');
		var mid = feature.getId();
		if (!showFunction) {
			var innerTable = $('#taskdiv');
			var scrollLeft = 0;
			var scrollTop = 0;
			if (innerTable) {
				scrollLeft = innerTable.scrollLeft();
				scrollTop = innerTable.scrollTop();
			}

			$('#' + this.popupContentDiv).html("");
			var geometry = feature.getGeometry();
		    var position=null;
		    if(geometry instanceof ol.geom.Point){	        
		       position= geometry.getCoordinates();
		    }
		     else if(geometry instanceof ol.geom.LineString){
		    	 
		        	var points=geometry.getCoordinates();
		        	var length=points.length;
		        	if(length==2){
		        		position=[(points[0][0]+points[1][0])/2,(points[0][1]+points[1][1])/2];
		        	}else{
		        		
		        		position=points[points.length/2]
		        	}
		        }
		    this.popupoverlay.setPosition(position);
			var layername = feature.get('layername');
			this.popupoverlay.set('state', 'show');
			this.popupoverlay.set('layername', layername);
			var contentHtml = feature.get('contentHtml');
			var taskCollection = feature.get('taskCollection');
			var taskSize = 0;
			if (taskCollection) {
				taskSize = taskCollection.getLength();
			}
			if (taskSize > 0)
				contentHtml += "<div id='taskInfoDetailContent'></div>";
			$('#' + this.popupContentDiv).html(contentHtml);
			if (taskSize > 0) {
				iniTaskTable('taskInfoDetailContent',
						taskCollection.getArray(), scrollLeft, scrollTop);
			}
		} else {
			showFunction(mid);
		}

		this.currentPopup.popupid = mid;
	}

};

/**
 * 地图分辨率改变事件
 * @private
 */
SSMap.prototype._changeMapResolution=function(){
    var this_=this;
    this.view.on('change:resolution',function(evt){
        var zoom=this_.view.getZoom();
        var name= this_.popupoverlay.get('layername');
        var keys = Object.keys(this_.userLayers);
        if (keys.length > 0) {
            for (var i = 0; i < keys.length; i++) {
                var layer = this_.userLayers[keys[i]].layer;
                if (this_.view.getZoom() >= layer.get('zoom')) {
                    if(!layer.getVisible()) {
                        layer.setVisible(true);
                        $('#' + this_.popupContentDiv).parent().show();
                    }

                } else {
                    if(layer.getVisible()) {
                        layer.setVisible(false);
                        if (name == layer.get('name')) {
                            $('#' + this_.popupContentDiv).parent().hide();
                            this_.popupoverlay.setPosition(undefined);
                            delete this_.currentPopup.popupid;
                        }
                    }
                }
            }
        }


        if(MapConfig.airports[this_.apc].resetScale) {
            var markers = Object.keys(this_.markers);
            if (markers.length > 0) {
                for (var i = 0; i < markers.length; i++) {
                    var marker = this_.markers[markers[i]];
                    var layername = marker.layer;
                    if(layername==LayerConfig.psn.name)
                         marker.updatePsnTextsize(zoom);
                }
            }
        }
    });
    this_.olMap.renderSync();
};

/**
 * 添加地图工具条widget
 * @param infoid 提示信息的div
 * @param toolboxid 工具条widget的div
 */
SSMap.prototype.addToolBox=function(name,title,zomm,infoid,toolboxid){
        this.drawLayer=this.addLayer(name,title,zomm);
        var olMap=this.olMap;
        var infospan=document.getElementById(infoid);
        var containerDiv=document.getElementById(toolboxid);
        var fixControl = new ol.control.MeasureControl({
            toolid:'fix_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            controlText: '机场全图',
            map:olMap,
            className:'tool_map_fix_off'
        });
        var panningControl = new ol.control.MeasureControl({
            toolid:'panning_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            controlText: '地图漫游',
            map:olMap,
            className:'tool_map_panning_on'
        });


        var zoomoutControl = new ol.control.MeasureControl({
            toolid:'zoomout_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            geotype: 'Box',
            controlText: '拉框放大',
            map:olMap,
            className:'tool_drag_zoomout_off'
        });

        var signControl = new ol.control.MeasureControl({
            toolid:'sign_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            geotype: 'Polygon',
            controlText: '标记区域',
            map:olMap,
            className:'tool_drag_rectangle_off'
        });

        var cleanControl = new ol.control.MeasureControl({
            toolid:'clean_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            controlText: '清除标记',
            map:olMap,
            className:'tool_clear_off'
        });
        var distanceControl = new ol.control.MeasureControl({
            toolid:'distance_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            geotype: 'LineString',
            controlText: '测量距离',
            map:olMap,
            className:'tool_measure_distance_off'
        });
        var acreageControl = new ol.control.MeasureControl({
            toolid:'acreage_tool',
            infoDiv:infospan ,
            containerDiv: containerDiv,
            geotype: 'Polygon',
            controlText: '测量面积',
            map:olMap,
            className:'tool_measure_acreage_off'
        });

        olMap.addControl(fixControl);
        olMap.addControl(zoomoutControl);
        olMap.addControl(panningControl);
        olMap.addControl(signControl);
        olMap.addControl(cleanControl);
        olMap.addControl(distanceControl);
        olMap.addControl(acreageControl);


};

/**
 * 增加历史轨迹图层
 */
SSMap.prototype.addRouteLayer=function(name,title,zomm){
    this.routeLayer =this.addLayer(name,title,zomm);
};

/**
 * 增加报警图层
 */
SSMap.prototype.addAlertLayer=function(name,title,zomm){
    this.addLayer(name,title,zomm);
};
