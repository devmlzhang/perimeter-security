/**
 * Created by Administrator on 2015/7/21.
 */

var PsnColor={
    fill:'#88BED2',
    stroke:'#4597B6',
    width:0
};
var VehicleColor={
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};
var FlightColor={
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};
var DefaultColor={
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};
var AlertColor={
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};
var RouteColor={
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};
/**
 * 五角星有任务提示
 */
var TaskLabel={
    label:'★',
    fill:'#FFFF66',
    stroke:'#FFFF66',
    width:3
};

/**
 * 带标签的标注
 *
 * @author Sparker
 */


/**
 * 初始化 坐标 图标 标签 详细标签 是否显示详细标签 是否显示标签 *** 默认离线时间 离线方法 id 状态图标集合
 */
var LabelMarker = function (options) {
    this.label = options.prop.label; // 标注
    this.nomanlabel = options.prop.nomanlabel;//treenode name
    this.username=options.prop.username;
    this.iconType=options.iconType||"image";
    this.iconUrl = options.iconUrl;
    this.iconName=options.iconName;
    this.defaultTimeOut = options.defaultTimeOut || 1500; // 默认离线时间15秒
    this.timeoutFunction=null;
    this.online = options.online;// 在线标识
    this.popupid = options.prop.id;
    this.mid = options.prop.id;
    this.layer = options.layer;
    this.rotation = options.angle ? options.angle * Math.PI / 180 : 0;
    this.taskStatus = options.taskStatus;
    this.visible = true;
    this.resourceType = options.resourceType;
    this.displayResourceLabel=options.display;
    this.displayMancarbinding=options.displayMancarbinding;
    this.taskCollection=options.taskCollection||new ol.Collection();
    this.properties = options.owner||{};
    this.direct=options.prop.direct;
    this.coordinate=options.coordinate;
    this.feature = new ol.Feature();
    this.feature.setId(this.mid);
    this.feature.set('contentHtml', options.prop.contentHtml);
    this.feature.set('taskCollection',this.taskCollection);
    this.feature.set('layername', this.layer);
    this.feature.set('showFunction', options.prop.showfunction);
    this.feature.set('showpopup', options.prop.showpopup);
    this.feature.set('obj', options.obj);


    //文本注记样式

    var vehicleIconStyle = null;
    var vehicleTextStyle = null;

    var warningIconStyle = null;
    var warningTextStyle = null;

    var flightIconStyle = null;
    var flightTextStyle = null;

    var psnTextStyle = null;

    var routeIconStyle = null;
    var routeTextStyle = null;

    var defaultIconStyle = null;
    var defaultTextStyle = null;
    
    if (options.layer == LayerConfig.device.name) {
        vehicleIconStyle = getVehicleIconStyle(this.iconType,this.iconUrl,this.iconName,this.online, this.rotation);
         var showlabel;
        if(this.displayMancarbinding){
            showlabel=this.label;
        }else{
            showlabel=this.nomanlabel;
        }
        vehicleTextStyle = getVehicleTextStyle(showlabel,this.taskStatus);
        if(!this.displayResourceLabel)
            vehicleTextStyle.getText().setText('');
        this.feature.setStyle([vehicleIconStyle, vehicleTextStyle]);
    }
    else if (options.layer == LayerConfig.flight.name) {
        this.adid=options.adid;
        flightIconStyle = getFlightIconStyle(this.iconType,this.iconUrl,this.iconName,this.adid, this.rotation);
        flightTextStyle = getFlightTextStyle(this.label);
        if(!this.displayResourceLabel)
            flightTextStyle.getText().setText('');
       this.feature.setStyle([flightIconStyle, flightTextStyle]);
    }
    else if (options.layer == LayerConfig.psn.name) {
        psnTextStyle = getPsnTextStyle(this.label);
        this.feature.setStyle([psnTextStyle]);
    }
    else if (options.layer == LayerConfig.route.name) {
        routeIconStyle = getRouteIconStyle(this.iconType,this.iconUrl,this.iconName,this.rotation);
        routeTextStyle = getRouteTextStyle(this.label);
        if(!this.displayResourceLabel)
            routeTextStyle.getText().setText('');
        this.feature.setStyle([routeIconStyle, routeTextStyle]);
    }
    else if (options.layer == LayerConfig.alert.name){
        this.warning_type=options.warning_type;
        warningIconStyle = getWarningIconStyle(this.iconType,this.iconUrl,this.iconName,this.warning_type,this.rotation);
        warningTextStyle = getWarningTextStyle(this.label);
        if(!this.displayResourceLabel)
            warningTextStyle.getText().setText('');
        this.feature.setStyle([warningIconStyle, warningTextStyle]);
    }
    else if (options.layer == "defenceareaLayer"){
        this.feature.setStyle(getAreaStyle(options.lineStatus));
    }
    else if(options.layer == "areaLayer"){
        this.feature.setStyle(getSafeAreaStyle(options.lineStatus));
    }
    else if (options.layer == "defenceareaDeadLayer"){
        this.lineStatus=options.lineStatus;
        this.feature.setStyle(getDeadAreaStyle(options.lineStatus));
    }
    else if (options.layer == "warningTraceLayer"){
        this.feature.setStyle(tracesStyles);
    }
    else{
    	defaultIconStyle = getDefaultIconImageStyle(this.iconUrl,this.rotation);
    	defaultTextStyle = getDefaultTextStyle(this.label);
        this.feature.setStyle([defaultIconStyle, defaultTextStyle]);
    }
	    // 处理坐标
	var geometry = null;
	if (options.geometry == 'polyline') {
		var points = options.points;
		geometry = new ol.geom.LineString(points);
	} else if (options.geometry === 'polygon') {
		var points = options.points;
		geometry = new ol.geom.Polygon([points]);
	} else {
	    this.coordinate = options.coordinate;
		geometry = new ol.geom.Point(options.coordinate);
	}
    this.feature.setGeometry(geometry);
    /**
     * 更新任务状态图标
     * @param setstatusIcon
     * @param settaskStatus
     */
    this.updateTaskStatus = function (settaskStatus) {
        if (this.taskStatus == settaskStatus)
            return;
        this.taskStatus = settaskStatus;
        if (!this.display)
            return;
        if (options.layer == LayerConfig.device.name) {
            var showlabel;
            if(this.displayMancarbinding){
                showlabel=this.label;
            }else{
                showlabel=this.nomanlabel;
            }
            vehicleTextStyle.getText().setText(this.taskStatus ? ( TaskLabel.label + showlabel) : showlabel);
        }
        else if (options.layer == LayerConfig.flight.name)
            flightTextStyle.getText().setText(this.label);
        else if (options.layer == LayerConfig.psn.name)
            psnTextStyle.getText().setText(this.label);
        else
            warningTextStyle.getText().setText(this.label);
        this.feature.changed();
    };


    /**
     * 获取在线状态
     * @returns {boolean|*}
     */
    this.getOnlineStatus = function () {
        return this.online;
    };
    /**
     * 设置离线定时器
     * @param timeoutFunction
     */
    this.setOffLine = function (timeoutFunction) {
        var this_ = this;
        if (this_.defaultTimeOut < 0||this.online==false) {
            return;
        }
        if (this_.timeoutFunction) {
            clearTimeout(this_.timeoutFunction);
        }
        this_.timeoutFunction = setTimeout(function () {
            if (this_.online) {
                if (typeof timeoutFunction == "function") {
                    timeoutFunction(options.prop.id);
                }
                this_.online = false;
            }
        }, this_.defaultTimeOut);
    };
    /**
     * 设置Marker的文字注记
     * @param setlabel
     */
    this.setLabel = function (setlabel) {

        if (setlabel == undefined || setlabel == null)
            return;
        if (this.label == setlabel)
            return;
        this.label = setlabel;
        if (!this.display)
            return;
        if (options.layer == LayerConfig.device.name){
            var showlabel;
            if(this.displayMancarbinding){
                showlabel=this.label;
            }else{
                showlabel=this.nomanlabel;
            }
            vehicleTextStyle.getText().setText(this.taskStatus ? (TaskLabel.label + showlabel) : showlabel);
        }
        else if (options.layer == LayerConfig.flight.name)
            flightTextStyle.getText().setText(setlabel);
        else if (options.layer == LayerConfig.psn.name)
            psnTextStyle.getText().setText(setlabel);
        else if (options.layer == LayerConfig.route.name)
            routeTextStyle.getText().setText(setlabel);
        else
            warningTextStyle.getText().setText(setlabel);

        //this._setLabDivHtml();
        this.feature.changed();
    };
    this.setProp = function (setprop) {
        this.feature.set('showFunction', setprop.showfunction);
        this.feature.set('showpopup', setprop.showpopup);
        this.feature.set('content', setprop.contentHtml);
        this.feature.set('layer', setprop.layer);

    };
    /**
     * 控制文字注记的显示与隐藏
     * @param setdisplay
     */
    this.displayLabel = function (setdisplay) {
        if (!this.visible)
            return;
        if (setdisplay) {
            if (options.layer == LayerConfig.device.name) {
                var showlabel;
                if(this.displayMancarbinding){
                    showlabel=this.label;
                }else{
                    showlabel=this.nomanlabel;
                }
                vehicleTextStyle.getText().setText(this.taskStatus ? ( TaskLabel.label + showlabel) : showlabel);
            }
            else if (options.layer == LayerConfig.flight.name)
                flightTextStyle.getText().setText(this.label);
            else if (options.layer == LayerConfig.psn.name)
                psnTextStyle.getText().setText(this.label);
            else if (options.layer == LayerConfig.route.name)
                routeTextStyle.getText().setText(this.label);
            else
                warningTextStyle.getText().setText(this.label)
        } else {
            if (options.layer == LayerConfig.device.name)
                vehicleTextStyle.getText().setText('');
            else if (options.layer == LayerConfig.flight.name)
                flightTextStyle.getText().setText('');
            else if (options.layer == LayerConfig.psn.name)
                psnTextStyle.getText().setText('');
            else if (options.layer == LayerConfig.route.name)
                routeTextStyle.getText().setText('');
            else
                warningTextStyle.getText().setText('')
        }
        this.displayResourceLabel=setdisplay;
        this.feature.changed();
    };
    /**
     * 控制人车绑定注记的显示与隐藏
     * @param setdisplay
     */
    this.displayMancarLabel = function(setdisplay) {
        this.displayMancarbinding = setdisplay;
        if (!this.visible)
            return;

        var showlabel;
        if (setdisplay) {
            showlabel = this.label;
        } else {
            showlabel = this.nomanlabel;
        }
        vehicleTextStyle.getText().setText(this.taskStatus ? (TaskLabel.label + showlabel) : showlabel);

        this.feature.changed();
    };
    /**
     * 更新Marker的图标
     * @param setIconUrl 新图标地址
     * @param online
     */
    this.updateMarkerIcon = function (setIconUrl,online) {
        this.iconUrl = setIconUrl;
        this.online=online;
        if (!this.visible)
            return;
        if (options.layer == LayerConfig.device.name) {
            vehicleIconStyle = getVehicleIconStyle(this.iconType,this.iconUrl,this.iconName,this.online, this.rotation);
            this.feature.setStyle([vehicleIconStyle, vehicleTextStyle]);
        }
        else if (options.layer == LayerConfig.flight.name) {
            flightIconStyle = getFlightIconStyle(this.iconType,this.iconUrl,this.iconName,this.adid, this.rotation);
            this.feature.setStyle([flightIconStyle, flightTextStyle]);
        }
        else if (options.layer == LayerConfig.route.name) {
            routeIconStyle = getRouteIconStyle(this.iconType,this.iconUrl,this.iconName,this.rotation);
            this.feature.setStyle([routeIconStyle, routeTextStyle]);
        }
        else if (options.layer == LayerConfig.psn.name) {
            this.feature.setStyle([psnTextStyle]);
        }
        else if(options.layer == LayerConfig.alert.name){
            this.feature.setStyle([warningIconStyle, warningTextStyle]);
        }
        else{
        	defaultIconStyle = getDefaultIconImageStyle(this.iconUrl,this.rotation);
            this.feature.setStyle([defaultIconStyle, defaultTextStyle]);
        }
        this.feature.changed();
    };
    /**
     * 控制marker的显示与隐藏
     * @param setdisplay
     */
    this.display = function (setdisplay) {
        this.visible = setdisplay;
        if (this.visible) {
            if (options.layer == LayerConfig.device.name) {
                var showlabel;
                if(this.displayMancarbinding){
                    showlabel=this.label;
                }else{
                    showlabel=this.nomanlabel;
                }
                vehicleIconStyle = getVehicleIconStyle(this.iconType,this.iconUrl,this.iconName,this.online, this.rotation);
                vehicleTextStyle = getVehicleTextStyle(showlabel,  this.taskStatus);
                if(!this.displayResourceLabel)
                    vehicleTextStyle.getText().setText('');
                this.feature.setStyle([vehicleIconStyle, vehicleTextStyle]);
            }
            else if (options.layer == LayerConfig.flight.name) {
                flightIconStyle = getFlightIconStyle(this.iconType,this.iconUrl,this.iconName,this.adid, this.rotation);
                flightTextStyle = getFlightTextStyle(this.label );
                if(!this.displayResourceLabel)
                    flightTextStyle.getText().setText('');
                this.feature.setStyle([flightIconStyle, flightTextStyle]);
            }
            else if (options.layer == LayerConfig.psn.name) {
                psnTextStyle = getPsnTextStyle(this.label);
                this.feature.setStyle([psnTextStyle]);
            }
            else if (options.layer == LayerConfig.route.name) {
                routeIconStyle = getRouteIconStyle(this.iconType,this.iconUrl,this.iconName,this.rotation);
                routeTextStyle = getRouteTextStyle(this.label);
                if(!this.displayResourceLabel)
                    routeTextStyle.getText().setText('');
                this.feature.setStyle([routeIconStyle, routeTextStyle]);
            }
            else if (options.layer == LayerConfig.alert.name){
                warningIconStyle = getWarningIconStyle(this.iconType,this.iconUrl,this.iconName,this.warning_type,this.rotation);
                warningTextStyle = getWarningTextStyle(this.label);
                if(!this.displayResourceLabel)
                    warningTextStyle.getText().setText('');
                this.feature.setStyle([warningIconStyle, warningTextStyle]);
            }
            else if (options.layer == "defenceareaDeadLayer"){
                this.feature.setStyle(getDeadAreaStyle(setdisplay));
            }
            else{
            	defaultIconStyle = getDefaultIconImageStyle(this.iconUrl,this.rotation);
            	defaultTextStyle = getDefaultTextStyle(this.label);
                this.feature.setStyle([defaultIconStyle, defaultTextStyle]);
            }
            
            if(this.coordinate) {
            	geometry.setCoordinates(this.coordinate);
            }
        }
        else
            this.feature.setStyle([]);
        this.feature.changed();
    };
    /**
     * 更新marker的坐标
     * @param setcoordinate
     */
    this.updateCoodiante = function (setcoordinate) {
        if (this.coordinate[0] == setcoordinate[0] && this.coordinate[1] == setcoordinate[1])
            return;
        this.coordinate = setcoordinate;
        if (!this.visible)
            return;
        geometry.setCoordinates(setcoordinate);
        this.feature.changed();
    };

    /**
     * 更新机位字体大小
     * @param map_level
     */
    this.updatePsnTextsize = function (map_level) {
        if (!this.visible)
            return;
        var font=LayerConfig.psn.textSize[map_level]+" Calibri,sans-serif";
        psnTextStyle.getText().setFont(font);
    };

    /**
     * 更新marker的显示角度
     * @param setrotation
     */
    this.updateRotation = function (setrotation) {
        if (this.rotation == setrotation)
            return;
        this.rotation = setrotation;
        if (!this.visible)
            return;
        if (options.layer == LayerConfig.device.name) {
            vehicleIconStyle.getImage().setRotation(this.rotation);
        }
        else if (options.layer == LayerConfig.flight.name) {
            flightIconStyle.getImage().setRotation(this.rotation);
        }

        else if (options.layer == LayerConfig.route.name) {
            routeIconStyle.getImage().setRotation(this.rotation);
        }
        else
            warningIconStyle.getImage().setRotation(this.rotation);
    };
    this.destroy = function () {
        if (this.timeoutFunction) {
            clearTimeout(this.timeoutFunction);
        }
        if (this.mid) {
            this.mid = null;
        }
        this.label = null; // 标注
    };
    this.updateMarker = function (options) {
        this.label = options.prop.label || ""; // 标注
        this.nomanlabel = options.prop.nomanlabel;//treenode name
        this.username=options.prop.username;
        this.iconType=options.iconType||"image";
        this.iconUrl = options.iconUrl;
        this.iconName=options.iconName;
        this.coordinate = options.coordinate;
        this.defaultTimeOut = options.defaultTimeOut || 1500; // 默认离线时间15秒
        this.online = options.online;// 在线标识
        this.scale = options.iconScale || 1;
        this.rotation = options.angle ? options.angle * Math.PI / 180 : 0;
        this.displayResourceLabel=options.display;
        this.displayMancarbinding=options.displayMancarbinding;
        this.layer=options.layer;
        this.properties = options.owner||{};
        this.setOffLine(options.timeoutFunction); // 离线方法
        if (this.visible) {
            if (options.layer == LayerConfig.device.name) {
                var showlabel;
                if(this.displayMancarbinding){
                    showlabel=this.label;
                }else{
                    showlabel=this.nomanlabel;
                }
                vehicleIconStyle = getVehicleIconStyle(this.iconType,this.iconUrl,this.iconName,this.online, this.rotation);
                vehicleTextStyle = getVehicleTextStyle(showlabel, this.taskStatus);
                vehicleIconStyle.setZIndex(1000);
                vehicleTextStyle.setZIndex(1000);
                if(!this.displayResourceLabel)
                    vehicleTextStyle.getText().setText('');
                this.feature.setStyle([vehicleIconStyle, vehicleTextStyle]);
            }
            else if (options.layer == LayerConfig.flight.name) {
                this.adid=options.adid;
                flightIconStyle = getFlightIconStyle(this.iconType,this.iconUrl,this.iconName,this.adid, this.rotation);
                flightTextStyle = getFlightTextStyle(this.label);
                if(!this.displayResourceLabel)
                    flightTextStyle.getText().setText('');
                this.feature.setStyle([flightIconStyle, flightTextStyle]);
            }
            else if (options.layer == LayerConfig.psn.name) {
                psnTextStyle = getPsnTextStyle(this.label);
                this.feature.setStyle([psnTextStyle]);
            }
            else if (options.layer == LayerConfig.route.name) {
                routeIconStyle = getRouteIconStyle(this.iconType,this.iconUrl,this.iconName,this.rotation);
                routeTextStyle = getRouteTextStyle(this.label);
                if(!this.displayResourceLabel)
                    routeTextStyle.getText().setText('');
                this.feature.setStyle([routeIconStyle, routeTextStyle]);
            }
            else if (options.layer == LayerConfig.alert.name){
                warningIconStyle = getWarningIconStyle(this.iconType,this.iconUrl,this.iconName,this.warning_type,this.rotation);
                warningTextStyle = getWarningTextStyle(this.label);
                if(!this.displayResourceLabel)
                    warningTextStyle.getText().setText('');
                this.feature.setStyle([warningIconStyle, warningTextStyle]);
            }
            else{
            	
            	defaultIconStyle = getDefaultIconImageStyle(this.iconUrl,this.rotation);
            	defaultTextStyle = getDefaultTextStyle(this.label);
                this.feature.setStyle([defaultIconStyle, defaultTextStyle]);
            }
            this.feature.set('showFunction', options.prop.showfunction);
            this.feature.set('showpopup', options.prop.showpopup);
            this.feature.set('contentHtml', options.prop.contentHtml);
            this.feature.set("taskCollection", options.taskCollection);
            this.feature.set('layername', options.layer);
            
    	    // 处理坐标
        	if (options.geometry == 'polyline') {
        		var points = options.points;
        		geometry = new ol.geom.LineString(points);
        	} else if (options.geometry === 'polygon') {
        		var points = options.points;
        		geometry = new ol.geom.Polygon(points);
        	} else {
        	    this.coordinate = options.coordinate;
        		geometry = new ol.geom.Point(options.coordinate);
        	}
            this.feature.setGeometry(geometry);            
        }
    };
    /**
     * 更新任务集合
     * @param task
     * @param changetype
     * @returns {number}
     */
    this.updateTaskCollection=function(task,changetype) {
        this.taskCollection.updateItem(task, 'tnb', changetype);
        this.feature.set("taskCollection", this.taskCollection);
        var length = this.taskCollection.getLength();
        //if (length == 0)
        //    this.taskStatus = false;
        //else
        //    this.taskStatus = true;
        return length;
    };
    this.setOffLine(options.timeoutFunction); // 离线方法
};

var getPsnTextStyle = function (psntext) {
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 0,
            text: psntext,
            font: '15px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: PsnColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: PsnColor.stroke,
            //    width: PsnColor.width
            //}),
        })
    });
    return textStyle;
};


var getVehicleIconStyle=function(iconType,iconUrl,iconName,online,rotation){
    if(iconType=="image"){
        return getVehicleIconImageStyle(iconUrl,rotation);
    }
    else{
        return getVehicleIconFontStyle(iconName,online,rotation)
    }

};

var getVehicleIconImageStyle = function (iconUrl, rotation) {
    //图片注记样式
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: iconUrl,
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            opacity: 1,
            rotation: rotation
        })
    });
    return iconStyle;
};

var getVehicleIconFontStyle = function (iconName,online, rotation) {
    //图片注记样式
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 0,
            text: iconName,
            font: '30px IAS_CARS', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: online==true?Icon_Style.Vehicle.online:Icon_Style.Vehicle.offline
            }),
            textBaseline:"middle"
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};

var getVehicleTextStyle = function (vehicletext, taskStatus) {
    var position=Icon_Postion.Postion_selectd;
    var icon_type=Icon_Postion.Icon_Selectd;
    var offset=Icon_Postion[icon_type+"_"+position].offSet;
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: offset[0],
            offsetY: offset[1],
            text: taskStatus ? TaskLabel.label+ vehicletext : vehicletext,
            font: '12px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: taskStatus?TaskLabel.fill:VehicleColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: VehicleColor.stroke,
            //    width: VehicleColor.width
            //}),
        })
    });
    return textStyle;
};



var getFlightIconStyle=function(iconType,iconUrl,iconName,adid,rotation){
    if(iconType=="image"){
        return getFlightIconImageStyle(iconUrl,rotation);
    }
    else{
        return getFlightIconFontStyle(iconName,adid,rotation)
    }
};

var getFlightIconImageStyle = function (iconUrl, rotation) {
    //图片注记样式
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: iconUrl,
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            opacity: 1,
            rotation: rotation
        })
    });
    return iconStyle;
};

var getFlightIconFontStyle = function (iconName,adid, rotation) {
    //图片注记样式
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 0,
            text: iconName,
            font: '35px IAS_CARS', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: adid=="A"?Icon_Style.Flight.arrived:Icon_Style.Flight.depart
            }),
            textBaseline:"middle",
            rotation:rotation
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};


var getFlightTextStyle = function (flighttext) {
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 25,
            text: flighttext,
            font: '12px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: FlightColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: FlightColor.stroke,
            //    width: FlightColor.width
            //}),
        })
    });
    return textStyle;
};

var getRouteIconStyle=function(iconType,iconUrl,iconName,rotation){
    if(iconType=="image"){
        return getRouteIconImageStyle(iconUrl,rotation);
    }
    else{
        return getRouteIconFontStyle(iconName,rotation)
    }
};


var getRouteIconImageStyle = function (iconUrl, rotation) {
    //图片注记样式
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: iconUrl,
            anchor: [0.5, 20],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 1,
            rotation: rotation
        }),
        zIndex: 100
    });
    return iconStyle;
};

var getRouteIconFontStyle = function (iconName, rotation) {
    //图标字体样式
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 0,
            text: iconName,
            font: '30px IAS_CARS', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: Icon_Style.History.vehicle
            }),
            textBaseline:"middle",
            rotation:rotation
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};



var getRouteTextStyle = function (routetext) {
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 20,
            text: routetext,
            font: '12px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: RouteColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: RouteColor.stroke,
            //    width: RouteColor.width
            //}),
        }),
        zIndex: 101
    });
    return textStyle;
};



var getWarningIconStyle=function(iconType,iconUrl,iconName,warning_type,rotation){
    if(iconType=="image"){
        return getWarningIconImageStyle(iconUrl,rotation);
    }
    else{
        return getWarningIconFontStyle(iconName,warning_type,rotation)
    }
};

var getWarningIconImageStyle = function (iconUrl, rotation) {
    //图片注记样式
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: iconUrl,
            anchor: [0.5, 8],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 1,
            rotation: rotation
        })
    });
    return iconStyle;
};

var getWarningIconFontStyle = function (iconName,warning_type, rotation) {
    //图标字体样式
    var fill_color;
    if(warning_type==1){
        fill_color=Icon_Style.Warning.type_over;
    }
    else if(warning_type==2){
        fill_color=Icon_Style.Warning.type_in;

    }
    else if(warning_type==3){
        fill_color=Icon_Style.Warning.type_out;

    }
    else if(warning_type==4){
        fill_color=Icon_Style.Warning.type_gate;

    }
    else if(warning_type==5){
        fill_color=Icon_Style.Warning.type_place;

    }
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 0,
            text: iconName,
            font: '30px IAS_CARS', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: fill_color
            }),
            textBaseline:"middle",
            rotation:rotation
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};



var getWarningTextStyle = function (defalutText) {
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 25,
            text: defalutText.replace(".0",""),
            font: '12px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: DefaultColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};

/**
 * 防区样式
 */
var getLineStyle = function (status) {
	var lineStyle = new ol.style.Style({
		stroke : new ol.style.Stroke({
			color : (status!=2?'#6893F4':'gray'),
			width : 25
			//lineDash:[30,10],
			//lineCap:'round',
			//lineJoin:'round'
		})
	});
    return lineStyle;
};

/**
 * 防区面样式
 */
var getAreaStyle = function (status) {
    var areaStyle = new ol.style.Style({
        stroke : new ol.style.Stroke({
            color : (status!=2?DefenceareaColor.border_nomal_color:DefenceareaColor.unda_normal_color),
            width : 4
        }),
        fill:new ol.style.Fill({
            color:(status!=2?DefenceareaColor.da_normal_color:DefenceareaColor.unda_normal_color)
        })
    });
    return areaStyle;
};
/**
 * 区域面样式
 */
var getSafeAreaStyle = function (status) {
    var areaStyle = new ol.style.Style({
        stroke : new ol.style.Stroke({
            color : (status!=2?DefenceareaColor.area_nomal_color:DefenceareaColor.area_nomal_color),
            width : 4
        })/*,
        fill:new ol.style.Fill({
            color:(status!=2?DefenceareaColor.area_nomal_color:DefenceareaColor.area_nomal_color)
        })*/
    });
    return areaStyle;
};
var DefenceareaColor={
	    warning_color:"#FF6347",
	    da_normal_color:"#6893F4",
	    dead_normal_color:"#f8751d",
	    unda_normal_color:"gray",
	    border_nomal_color:'#6893F4',
        area_nomal_color:'#0b4850',
	    border_normal_width:4
	};

/**
 * 盲区样式
 */
var getDeadAreaStyle = function (status) {
    var deadStyle = new ol.style.Style({
        stroke : new ol.style.Stroke({
            color : (status!=2?DefenceareaColor.da_normal_color:'gray'),
            width : 1
        }),
        fill:new ol.style.Fill({
            color:(status!=2?DefenceareaColor.dead_normal_color:'gray')
        })
    });
    return deadStyle;
};
/**
 * 报警轨迹样式
 * @type {*[]}
 */
var tracesStyles = [
    new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
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
                color: 'red'
            })
        }),
        geometry: function(feature) {
            var coordinates = feature.getGeometry().getCoordinates();
            return new ol.geom.MultiPoint(coordinates);
        },
        zIndex:99
    })
];

var getDefaultIconImageStyle = function (iconUrl, rotation) {
    //图片注记样式
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: iconUrl,
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            opacity: 1,
            rotation: rotation
        })
    });
    return iconStyle;
};



var getDefaultTextStyle = function (defalutText) {
    var textStyle = new ol.style.Style({
        text: new ol.style.Text({
            offsetX: 0,
            offsetY: 25,
            text: defalutText.replace(".0",""),
            font: '12px Calibri,sans-serif', // 字体与大小
            fill: new ol.style.Fill({ // 文字填充色
                color: DefaultColor.fill
            })
            //stroke: new ol.style.Stroke({ // 文字边界宽度与颜色
            //    color: DefaultColor.stroke,
            //    width: DefaultColor.width
            //}),
        })
    });
    return textStyle;
};