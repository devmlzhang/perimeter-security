var uid, sid;
var ssMap;
var msgData = [];  // 报警消息缓存池
var llWorker;  // 后台线程接收坐标、报警消息

var left_person_tree, left_flight_tree, left_vehicle_tree;
var leftTree;

var currentPopupFlightid;

var statusData = {}; //状态 key:usid

var currentAlertInfoId = []; // 保存当前报警信息ID
var displaySetting = {
    fltlab: true,
    reslab: true,
    alert: true,
    offlineResource: true,      //是否显示离线资源
    mancarbinding:true
};
var securityData = {};  // 权限数据
var device_vehicle_rl = {};//设备(定位盒)-车辆关系集合
var device_person_rl = {};//设备(手持机)-人员关系集合


//用户记录所有打开的子窗口
var subWindows = {};

//当前选择的树序号
var selectTab = 0;


/**
 * 入口，初始化地图
 * @param uuid
 * @param usid
 */
function ini(uuid, usid) {
    uid = uuid;
    sid = usid;
    leftTree = new LeftTree(); // 初始化树
    if (checkLogin() == false) {
        return;
    }
    // 初始化界面
    layout.initLayout();
    // 初始化地图
    if (!ssMap) {
        ssMap = new SSMap("mapBox", apc3);
    }
    ssMap.showPostionDiv = "showxy";
    ssMap.show();
    ssMap.addLayer(LayerConfig.psn.name, LayerConfig.psn.title, LayerConfig.psn.zoom);
    ssMap.addLayer(LayerConfig.device.name, LayerConfig.device.title, LayerConfig.device.zoom);
    ssMap.addLayer(LayerConfig.flight.name, LayerConfig.flight.title, LayerConfig.flight.zoom);
    ssMap.addToolBox(LayerConfig.draw.name, LayerConfig.draw.title, LayerConfig.draw.zoom, 'info', 'toolBox');
    // 初始化机位
    getPsn();
    // 初始化权限
    getSecurity();
    // 初始化区域快捷按钮

}

/********************** 多线程处理 START********************/

function doLlWorker(data) {
    try {
        llWorker.onmessage = function (evt) {
        	//处理围界报警系统消息
        	if(evt.data.type == 'devicemsg' || evt.data.type == 'alarmmsg')
        		handleSafe(evt.data);
        	else 
        		draw(evt.data);
        };
        llWorker.postMessage(data);
        llWorker.onerror = handleWorkerError;
    } catch (ex) {
        console.log(ex);
    }
}

/**
 * 围界报警处理和设备异常处理
 * @param data
 */
function handleSafe(data) {
	if(data.type == 'devicemsg') {

    	SafeMsg.doSafeDeviceMessage(data.data);//处理设备异常消息
	} else if(data.type == 'alarmmsg') {
        appendWaringGrid(data.data);//新增围界报警
    	SafeMsg.doSafeWarningMessage(data.data);//处理入侵告警
	}
}

function draw(json) {
    if (json == undefined||json ==null)
        return;
    if(json.type=='USER_REPEAT_LOGIN'){
    	var sameuid=json.uid;
    	var samesid=json.sid;
        if(login_sametime&&sameuid==uid&&samesid!=sid)
            kickoffOut();
        return;
    } if(json.type=='flightswitch'){
    	 
    	  $.messager.alert("", '航班日已切换，请刷新页面！', "info", function () {  
              window.location.reload(true);
          });  
        return;
    }
    //console.dir('lonlat:'+json.data.cm.lat_reg+';'+json.data.cm.lon_reg)
    if (json.type == "real") {
        if (json.data == undefined)
            return;
        if (json.operation == "upd") {
            var val = json.data.cm;
           // if(val.device_id=='B1')
		   //     console.log('DRAW开始绘制时间:'+(new Date()).Format('yyyy-MM-dd hh:mm:ss.S')+'--------------->'+val.ll_time);

            cleanExpiredVehicle(val);
            var type = val.type;
            var pid = null;
            // 更新地图
            var marker = ssMap.getMarker(val.device_id);  // 判断是更新还是新建
            var oldOnLineStatus = null;
            var oldlabel = null;
            var oldUsername=null;
            var taskCollection=null;
            var taskStatus = false;
            if (marker) {
                oldlabel = marker.nomanlabel;
                oldUsername=marker.username;
                oldOnLineStatus = marker.online;
                taskStatus=marker.taskStatus;
                //低速限制判断
                var speed=val.speed;
                if(speed<limit_speed){
                    val.speed=0;
                    var coordinate=marker.coordinate;
                    var point = CoordinateTransform.transform(ssMap.apc, coordinate[0], coordinate[1], true);
                    var lon_reg=point[0];
                    var lat_reg=point[1];
                    var direct=marker.direct;
                    val.lon_reg=lon_reg;
                    val.lat_reg=lat_reg;
                    val.direct=direct;
                }

            }else{
              //   taskCollection=queryNewDeviceTaskList(val.user_id);
              //   taskStatus=taskCollection&&taskCollection.getLength()>0;
            }

            if(marker){
            	 if(val.user_id&&marker.properties.user_id&&val.user_id==marker.properties.user_id){//上次和这次都有人的信息，并且相等
            		 taskCollection=  marker.feature.get('taskCollection');
                 }
            }
            if(taskCollection==null||taskCollection.getLength()==0){
            	var tasks = json.data.tasks;
                taskCollection=getTaskCollection(tasks);
            }
           
            if (taskCollection!=null&&taskCollection.getLength()>0 ) {
                taskStatus = true;
            } else {
                taskStatus = false;
            }
            
            var html = "";
            var iconUrl = "";
            var iconName="";
            var label = "";
            var showNameChange = false;
            var angle = val.direct;
            var onLineStatus = checkOnLine(val.ll_time);  // 检查在线状态

            if(onLineStatus==false){
                val.speed = 0;
            }
            if (type == "V") {
            	val.showlabel=vehicle_showtype=='carno'?val.vehicle_no: val.vehicle_id;
                showNameChange = (oldlabel == val.showlabel&&oldUsername==val.user_name);//车辆编号和当前人员不变
                var dmcode = val.dmcode;
                label = val.showlabel;
                html = formatVehiclePopContent(val);
                iconUrl = getVechileImageUrl(dmcode, angle);
                iconName=getVechileIconFont(dmcode);

                //显示司机姓名
                if(val.user_name){
                    label=label+'/'+val.user_name
                }
            }

           else if (type == "P") {
                showNameChange = (oldlabel == val.user_name);
                label = val.user_name;
                val.showlabel=val.user_name;
                html = formatPersonPopContent(val);
                iconUrl = "../images/marker/person/";
                iconName=getOtherIconFont("MALE");
            }
            if (onLineStatus) {
                iconUrl += "T";
            } else {
                iconUrl += "F";
            }
            iconUrl += ".png";

            var prop = {
                id: val.device_id,
                label: label,
                nomanlabel:val.showlabel,
                username:val.user_name,
                contentHtml: html,
                showpopup: true,
                direct:val.direct
            };

            var display = displaySetting.reslab;

            var options = {
                coordinate: [val.lon_reg, val.lat_reg],
                trans: true,
                prop: prop,
                iconType:Icon_Type,
                iconUrl: iconUrl,
                iconName:iconName,
                defaultTimeOut: offLineTime,
                timeoutFunction: timeoutFunction,
                angle: 0,//经过角度计算选择图片
                display: display,
                displayMancarbinding:displaySetting.mancarbinding,
                taskStatus: taskStatus,
                taskCollection: taskCollection,
                layer: LayerConfig.device.name,
                resourceType: type,
                online: onLineStatus,
                owner: {
                    user_id: val.user_id,
                    vehicle_id: val.vehicle_id
                }
            };
            ssMap.drawMarker(options);
            if (type == "V") {
                device_vehicle_rl[val.vehicle_id] = val.device_id;
                pid = val.dmcode;
            }
            if (type == "P") {
                device_person_rl[val.user_id] = val.device_id;
                pid = val.psid;
            }
            //已存在该资源， 更新树节点
            if (marker) { // 更新
                if (type == "P") {
                    if ((onLineStatus == oldOnLineStatus) && (showNameChange)) {
                        // return
                    }
                    else {
                            leftTree.updateTreeData("main_p_tree", val, onLineStatus, taskStatus);
                    }
                }
                if (type == "V") {
                    if ((onLineStatus == oldOnLineStatus) && (showNameChange)) {
                        //return
                    }
                    else {
                            leftTree.updateTreeData("main_v_tree", val, onLineStatus, taskStatus);
                    }
                }
            } else {  // 未存在该资源，新建树节点
                //ssMap.getMarker(val.device_id).online = onLineStatus;  // 写入状态
                if (type == "P") {
                        leftTree.addTreeNode("main_p_tree", val, onLineStatus,taskStatus);

                }
                if (type == "V") {
                        leftTree.addTreeNode("main_v_tree", val, onLineStatus, taskStatus);
                    }
            }
            if (pid) {
                var expandStatus = leftTree.getNodeState(type == "P" ? "main_p_tree" : "main_v_tree", pid);
                var display = expandStatus == "open";
                //根据父节点的展开关闭状态确定当前图标是否需要在地图上绘制
                    ssMap.displayMarker(val.device_id, display);  //新增图标是否显示
                if (!displaySetting.offlineResource && !onLineStatus) {
                    hideMarkerAndTnode(marker);
                }
            }
         //   if(val.device_id=='B1')
	      //       console.log('DRAW绘制完时间:'+(new Date()).Format('yyyy-MM-dd hh:mm:ss.S')+'--------------->'+val.ll_time);
        }
        if (json.operation == "del") {
            var val = json.data;//注意：operation=del和upd的json模型不一样
           // cleanExpiredVehicle(val);
            var marker = ssMap.getMarker(val.device_id);  // 判断是否存在
            if (marker) {
                ssMap.deleteMarker(val.device_id,LayerConfig.device.name);
                if (val.type == "V") {
                    leftTree.deleteTreeNode("main_v_tree", val.device_id);
                    delete device_vehicle_rl[val.vehicle_id];
                } else if (val.type == "P") {
                    leftTree.deleteTreeNode("main_p_tree", val.device_id);
                    delete device_person_rl[val.user_id];
                }
            }
        }
    }
    else if (json.type == "alert") {
        if (displaySetting.alert == false)
            return;
        var alerts = json.data;
        if (alerts == null || alerts == undefined)
            return;
        if (alerts.length > 0) {
            for (var i = 0; i < alerts.length; i++) {
                showAlertMsg(alerts[i]);  // 显示报警信息
            }
        }
    }
    else if (json.type == "flight") { // 航班数据
        if (json.operation == "refresh") {
            // 如果有航班监控权限
            if (securityData.flight != null) {
                // 清空地图当前显示的航班
                // 清空航班树
            	currentPopupFlightid = ssMap.currentPopup.popupid;
                leftTree.clearTreeNode("main_f_tree"); // 清空
                ssMap.removeMarkers(LayerConfig.flight.name);
                getFlts(false);  // 刷新航班
            }
        }
        if (json.operation == "upd") {
            if(json.data==null){
                return;
            }
            json.data.flseq="F_"+json.data.flseq;
            // 更改地图中指定机位上显示航班的部分属性。
            var newFlt_boj = json.data;
            if (ssMap.getMarker(newFlt_boj.flseq)==null) {  // 没有此航班
                leftTree.addFltTreeNode("main_f_tree", newFlt_boj);
            }
            // 地图中指定机位显示新航班
            drawFlight(newFlt_boj,false);// 画飞机
            var _adid = newFlt_boj.adid;
            if (_adid) {
                var expandStatus = leftTree.getNodeState("main_f_tree", _adid);
                var display=expandStatus == "open";
                //根据父节点的展开关闭状态确定当前图标是否需要在地图上绘制
                   ssMap.displayMarker(newFlt_boj.flseq,display);  //新增图标是否显示
                //重新计算资源个数
                   leftTree.getLeafAmount("main_f_tree");

            }

        }
        if (json.operation == "del") {
            if(json.data==null){
                return;
            }
            json.data.flseq="F_"+json.data.flseq;
            var del_Flt_boj = json.data;
            ssMap.deleteMarker(del_Flt_boj.flseq, LayerConfig.flight.name);
            // 删除树结点中的航班
            leftTree.deleteTreeNode("main_f_tree", del_Flt_boj.flseq);
            // 删除地图中,机位上航班
        }
    }
    else if (json.type == "login") { // 登录状态变更
        var data = json.data;
        var online = data.onln;
        var device_id = data.rid;
        var user_id = data.enb;
        var marker = ssMap.getMarker(device_id);
        if (online == "N") {  // 退出登录
            if(marker&&marker.resourceType=='P'){
                ssMap.deleteMarker(device_id, LayerConfig.device.name);
                leftTree.deleteTreeNode("main_p_tree", device_id);
                delete device_person_rl[user_id];
            }
        }
        else if (online == 'Y') {//切换用户,任务跟随变换
            //var taskCollection = queryNewDeviceTaskList(user_id);
            //var marker = ssMap.getMarker(device_id);
            //if (marker) {
            //    marker.taskCollection.clear();
            //    var taskSize = marker.updateTaskCollection(taskCollection, 'update');
            //    var treeid = (marker.resourceType == "V" ? "main_v_tree" : "main_p_tree");
            //    var taskStatus = taskSize == 0 ? false : true;
            //    leftTree.changeNodeButton(device_id, taskStatus, treeid);
            //    // 更新marker 改变ICON
            //    changeMarkerTaskIcon(device_id, taskStatus);
            //}
        }
    }
    else if (json.type == "task") {
        var task = json.data;
        var user_id = task.tenb;
        var vehicle_id = task.vnb;
        var opertion = json.operation;
        var markers = ssMap.getMarkerByKey('user_id', user_id);//根据人员ID获取所有的marker,包括车辆、人员，对所有的任务进行操作
        for (var i in markers) {
            var marker = markers[i];
            var device_id = marker.mid;
            var taskSize = 0;
            if (opertion == 'upd') {
                taskSize = marker.updateTaskCollection(task, 'update');
            } else if (opertion == 'del') {
                taskSize = marker.updateTaskCollection(task, 'delete');
            }
            var treeid = (marker.resourceType == "V" ? "main_v_tree" : "main_p_tree");
            var taskStatus = taskSize == 0 ? false : true;
            leftTree.changeNodeButton(device_id, taskStatus, treeid);
            changeMarkerTaskIcon(device_id, taskStatus);
            hideTreeTnode(marker);
            // 更新marker 改变ICON
        }
    }
    else
        if (json.type == "psn") { // 机位
            if (json.operation == "refresh") {
                ssMap.removeMarkers(LayerConfig.psn.name);
                getPsn();   // 获取所有机位数据
            }
        }
    }

function handleWorkerError(event) {
    console.log(event.message);
}

/********************** 多线程处理 END********************/



/**********************初始化数据  START********************/
/**
 * 初始化权限数据
 */
function getSecurity() {
    ajaxLoading();
    var parm = "uid=" + uid + "&sid=" + sid;
    $.ajax({
        type: "post",
        url: url.security,
        data: parm,
        dataType: 'json',
        error: function () {
            info("获取权限数据失败");
        },
        success: function (dataJson) {
        	console.dir(dataJson);
            if (dataJson) {
                if (dataJson.success == false) {
                    info(dataJson.msg);
                    console.log(dataJson.msg);
                    $.messager.alert('错误',"获取权限数据失败");
                } else {
                    securityData = dataJson.obj;  // 得到权限数据
                    // 如果有航班监控权限
                    if (securityData.flight != null) {
                        getFlts(true);  // 初始化航班
                        jumpTab("F", true);
                    }
                    else{
                    	console.log("无监控航班数据的权限");
                        var flightTree = {};
                    	flightTree.total = 0;
                        flightTree.rows = [];
                        left_flight_tree = leftTree.iniTree("main_f_tree", "航班", flightTree);
                    }
                    // 初始化坐标
                    getLLs();
                }
            }
        }
    });
}

/**
 * 初始化机位数据
 */
function getPsn() {
    $.ajax({
        type: "post",
        url: url.psn,
        dataType: 'json',
        error: function () {
            info("获取机位数据失败");
        },
        success: function (dataJson) {
            if (dataJson) {
                if (dataJson.success == false) {
                    info(dataJson.msg);
                } else {
                    // 初始化 机位标注，航班;
                    var data = dataJson.obj;
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var psn = data[i];
                            drawPsn(psn);// 画机位
                        }
                    }
                }
            }
        }
    });
}

/**
 * 初始化航班数据
 */
function getFlts(init) {
    $.ajax({
        type: "get",
        url: url.showflts,
        dataType: 'json',
        async: false,
        error: function () {
            info("获取航班数据失败");
        },
        success: function (dataJson) {
            var flightTree = {};
            var flightArray = [];

            if (dataJson) {
                if (dataJson.success == false) {
                    info(dataJson.msg);
                } else {
                    // 初始化 机位标注，航班;
                    var data = dataJson.obj;
                    if (data) {
                        var adidArray = [];   // 岗位类型数组
                        for (var i = 0; i < data.length; i++) {
                            var fltModel = data[i];
                            fltModel.flseq="F_"+fltModel.flseq;
                            var _adid = fltModel.adid;
                            var _icon;
                            var _adidName;
                            if (_adid == "A") {
                                _icon = "icon-A";
                                _adidName = "进港";
                            } else if (_adid == "D") {
                                _icon = "icon-D";
                                _adidName = "离港";
                            } else {
                                _icon = "icon-AD";
                                _adidName = "其它";
                            }
                            if ($.inArray(_adid, adidArray) == -1) {
                                adidArray.push(_adid);
                                var p_temp = {};
                                p_temp.id = _adid;
                                p_temp.name = _adidName;
                                if(_adid=='A') {
                                    if(init==true) {
                                        p_temp.state = expandFlt ? "open" : "closed";
                                    }else{
                                        p_temp.state = leftTree.arrival_expand ? "open" : "closed";
                                    }
                                }
                                if(_adid=='D') {
                                    if(init==true) {
                                        p_temp.state = expandFlt ? "open" : "closed";
                                    }else{
                                        p_temp.state = leftTree.departure_expand ? "open" : "closed";
                                    }
                                }
                                p_temp.buttons = "";
                                flightArray.push(p_temp);
                            }
                            var obj_temp = {};
                            obj_temp.id = fltModel.flseq;
                            obj_temp.name = fltModel.flno;
                            obj_temp.iconCls = _icon;
                            obj_temp._parentId = _adid;
                            obj_temp.buttons = "";
                            obj_temp.options = ["REAL"];
                            flightArray.push(obj_temp);

                            // 画飞机
                            drawFlight(fltModel,init);

                        }
                    }
                }
            }
            flightTree.total = flightArray.length;
            flightTree.rows = flightArray;
            left_flight_tree = leftTree.iniTree("main_f_tree", "航班", flightTree);
        }
    });
}

/**
 * 获取坐标数据
 */
function getLLs() {
    var parm = "uid=" + uid;
    parm += "&sid=" + sid;
    $.ajax({
        type: "get",
        url: url.ll,
        data: parm,
        dataType: 'json',
        error: function () {
            info("获取坐标数据失败");
        },
        success: function (data) {
            if (data) {
                if (data.success == false) {
                    info(data.msg);
                    console.log(data.msg);
                    $.messager.alert('错误',"获取坐标数据失败");
                } else {
                    // 初始化 树 left_person_tree,left_flight_tree,left_vehicle_tree;
                    // 地图markers
                    iniLLData(data.obj);
                    ajaxLoadEnd();
                    $('#toolBox').show();
                    // 初始化坐标webSocket
                   if(available_websocket.length>0) {
                       mqtt_connect();
                       llWorker = new Worker(path + "/js/main/llworks.js");
//                       if(iscpusleep){
//                           setInterval(setMessageArrivedSleepCpu, 1000*60*60);
//                       }
                   }
                   else{
                	   console.log('无匹配的mqtt服务器');
                       $.messager.alert('错误',"无匹配的MQTT服务器");
                   }
                }
            }
        }
    });
}

/**********************初始化数据  END********************/

/**********************绘制机位、飞机、车辆Marker START********************/

/**
 * 画机位
 * @param psn
 */
function drawPsn(psn) {
    var x = psn.gpsXLab;
    if (x > 180 || x < -180) return;
    var y = psn.gpsYLab;
    if (y > 90 || y < -90) return;
    var psnm = psn.pnam;
    var prop = {
        id: "psn_" + psnm,
        label: psnm,
        showfunction: showFltsByPsn,
        showpopup: true
    };
    var options = {
        coordinate: [x, y],
        trans: true,
        prop: prop,
        defaultTimeOut: -1,
        layer: LayerConfig.psn.name
    };
    ssMap.drawMarker(options);
}

/**
 * 画飞机
 * @param psn 机位数据
 */
function drawFlight(flight,init) {
    if (flight) {
        if (flight.gpsx > 180 || flight.gpsx < -180) return;
        if (flight.gpsy > 90 || flight.gpsy < -90) return;
        var ad = flight.adid;  // 进离港标识
        var iconUrl = "../images/marker/flight/" + ad + ".png";
        var iconName=getOtherIconFont("FLIGHT");
        var html = formatFlightPopContent(flight);
        var prop = {
            id: flight.flseq,
            label: flight.flno,
            contentHtml: html,
            showpopup: true
        };
        var display = displaySetting.fltlab;

        var options = {
            coordinate: [flight.gpsx, flight.gpsy],
            trans: true,
            prop: prop,
            iconType:Icon_Type,
            iconUrl: iconUrl,
            iconName:iconName,
            defaultTimeOut: -1,
            angle: flight.angle,
            display: display,
            layer: LayerConfig.flight.name,
            resourceType: 'F',
            online: true,
            adid:ad
        };
        ssMap.drawMarker(options);
        
        var mid = flight.flseq;
        if (!expandFlt && init) {
            ssMap.displayMarker(mid, expandFlt); //显示还是隐藏
        }
        if(!init) {
            var adid=flight.adid;
            if (adid == 'A') {
                if (!leftTree.arrival_expand) {
                    ssMap.displayMarker(mid, leftTree.arrival_expand); //显示还是隐藏
                } else {
                    if (currentPopupFlightid == mid) {
                        ssMap.panToMarker(mid,17);
                    }
                }
            }
            if (adid == 'D') {
                if (!leftTree.departure_expand) {
                    ssMap.displayMarker(mid, leftTree.departure_expand); //显示还是隐藏
                } else {
                    if (currentPopupFlightid == mid) {
                        ssMap.panToMarker(mid,17);
                    }
                }
            }
        }
    }
}
/**
 * 初始化得到的坐标数据
 * @param data
 */
function iniLLData(data) {
    var vehicleTree = {};
    var personTree = {};
    var vehicleArray = []; // 车辆树 数据数组
    var personArray = [];  // 人员树，数据数组
    var dmcodArray = [];   // 车辆类型数组
    var psidArray = [];   // 岗位类型数组
    for (var i = 0; i < data.length; i++) {
        var val = data[i].cm;
        var tasks = data[i].tasks;
        var type = val.type;
        var obj_temp = {};
        var angle = val.direct;
        // 在线状态
        var onLineStatus = checkOnLine(val.ll_time);  // 检查是否有信号
        if(onLineStatus==false){
             val.speed=0;//掉线车辆 速度置为0
        }
        var dmcode = val.dmcode;
        // 任务状态
        var taskStatus=false;
        var taskCollection=null;
        if (tasks&&tasks.length>0 ) {
            taskStatus = true;
            taskCollection=getTaskCollection(tasks);
        } else {
            taskStatus = false;
        }
        if (type == "V") {
            if ($.inArray(dmcode, dmcodArray) == -1) {
                dmcodArray.push(dmcode);
                var p_temp = {};
                p_temp.id = dmcode;
                p_temp.name = val.dmname;
                p_temp.state = expandRes ? "" : "closed";
                p_temp.buttons = "";
                vehicleArray.push(p_temp);
            }
        	val.showlabel=vehicle_showtype=='carno'?val.vehicle_no: val.vehicle_id;
            obj_temp = {};
            obj_temp.id = val.device_id;
            obj_temp.label=val.showlabel;
            obj_temp.name =val.showlabel;
            obj_temp.vid = val.vehicle_id;
            obj_temp.uid = val.user_id;
            obj_temp.uname = val.user_name;
            obj_temp.iconCls = "icon-" + (onLineStatus ? "T" : "F");
            obj_temp.onLineStatus=onLineStatus?1:-1;
            obj_temp._parentId = dmcode;
            obj_temp.buttons = "";
            obj_temp.options = securityData[dmcode + ""];
            obj_temp.taskStatus = taskStatus;   // 任务状态
            //人车绑定，显示司机姓名

            if(val.user_name){
                obj_temp.label+="/"+val.user_name;
            }
            // 保存对象到车辆数组
            vehicleArray.push(obj_temp);
            device_vehicle_rl[val.vehicle_id] = val.device_id;
        } else if (type == "P") {
// if(loginStatus==false) continue;
            var psid = val.psid;
            if ($.inArray(psid, psidArray) == -1) {
                psidArray.push(psid);
                var p_temp = {};
                p_temp.id = psid;
                p_temp.name = val.psnm;
                p_temp.state = expandRes ? "" : "closed";
                p_temp.buttons = "";
                personArray.push(p_temp);
            }
            val.showlabel=val.user_name;
            obj_temp = {};
            obj_temp.id = val.device_id;
            obj_temp.label=val.user_name;
            obj_temp.uid = val.user_id;
            obj_temp.vid = val.vehicle_id;
            obj_temp.uname = val.user_name;
            obj_temp.name = val.user_name;
            obj_temp.iconCls = "icon-" + (onLineStatus ? "T" : "F");
            obj_temp.onLineStatus=onLineStatus?1:-1;
            obj_temp._parentId = psid;
            obj_temp.buttons = "";
            // obj_temp.options=securityData[psid+""];
            var dpid = val.dpid;
            obj_temp.options = securityData[dpid + ""];
            obj_temp.taskStatus = taskStatus;   // 任务状态
            // 保存对象到车辆数组
            personArray.push(obj_temp);
            device_person_rl[val.user_id] = val.device_id;
        }
        var html = "";

        var iconUrl="";
        var iconName="";
        if (val.type == "V") {
            html = formatVehiclePopContent(val,taskStatus);
            iconUrl = getVechileImageUrl(dmcode, angle);
            iconName=getVechileIconFont(dmcode);

        }
        if (val.type == "P") {
            html = formatPersonPopContent(val, taskStatus);
            iconUrl = "../images/marker/person/";
            iconName= getOtherIconFont("MALE")
        }
        if (onLineStatus) {
            iconUrl += "T";
        } else {
            iconUrl += "F";
        }
        iconUrl += ".png";

        var prop = {
            id: val.device_id,
            label: obj_temp.label,
            nomanlabel:val.showlabel,
            username:val.user_name,
            contentHtml: html,
            showpopup: true,
            direct:val.direct
        };

        var display = displaySetting.reslab;
        var statusIcons = null;
        if (taskStatus) {
            statusIcons = ["../images/marker/status/task.png"];
        }

        var options = {
            coordinate: [val.lon_reg, val.lat_reg],
            trans: true,
            prop: prop,
            iconType:Icon_Type,
            iconUrl: iconUrl,//图片路径
            iconName:iconName,//图标字体
            defaultTimeOut: offLineTime,
            timeoutFunction: timeoutFunction,
            online: onLineStatus,
            angle: 0,//经过角度计算选择图片
            display: display,
            displayMancarbinding:displaySetting.mancarbinding,
            taskStatus: taskStatus,
            taskCollection:taskCollection,
            layer: LayerConfig.device.name,
            resourceType: type,
            owner:{
                user_id:val.user_id,
                vehicle_id:val.vehicle_id
            }
        };
        ssMap.drawMarker(options);
        if(!expandRes)
            ssMap.displayMarker(val.device_id, expandRes); //显示还是隐藏

    }

    vehicleTree.total = vehicleArray.length;
    vehicleTree.rows = vehicleArray;
    personTree.total = personArray.length;
    personTree.rows = personArray;

    left_person_tree = leftTree.iniTree("main_p_tree", "人员", personTree);
    jumpTab("P");
    //关闭所有的树节点
//	if(expandRes==false){
//		leftTree.expandTree("main_p_tree", false);
//	}
    left_vehicle_tree = leftTree.iniTree("main_v_tree", "车辆", vehicleTree);
    jumpTab("V");
    //关闭所有的树节点
//	if(expandRes==false){
//		leftTree.expandTree("main_v_tree", false);
//	}

}
/**********************绘制机位、飞机、车辆Marker END********************/


/**********************格式化浮云框内容  START********************/

/**
 * 格式化人员弹出框的内容
 * @param data
 * @param taskStatus
 * @returns {String}
 */
function formatPersonPopContent(data, taskStatus) {
    if (data) {
        if (data.device_id == null) {
            return "";
        }
        var content = "";
        content += "设备号：" + data.device_id + '</br>';
        if (data.user_id != null) {
            content += "员工号：" + data.user_id + '</br>';
        }
        if (data.user_name != null) {
            content += "姓 名：" + data.user_name + '</br>';
        }
        if (data.vehicle_id != null) {
            content += "车 号：" + data.vehicle_id + '</br>';
        }
        if (data.psnm != null) {
            content += "岗 位：" + data.psnm + '</br>';
        }
        if (data.speed != null) {
            content += "速 度：" + data.speed + '千米/小时 </br>';
        }
        if (data.ll_time != null) {
            content += "时 间：" + data.ll_time + '</br>';
        }
        //if (taskStatus) {
        //    content += "查 看：<a href='#' onclick='showTaskInfo(\"" + data.user_id + "\")'>当前任务信息</a>";
        //}
        return content;
    }
}
/**
 * 格式化车辆弹出框的内容
 *
 * @param data
 * @param taskStatus
 * @returns {String}
 */
function formatVehiclePopContent(data,taskStatus) {
    if (data) {
        if (data.device_id == null) {
            return "";
        }
        var content = "";
        content += "设备号：" + data.device_id + '</br>';
        if (data.vehicle_id != null) {
            content += "车 号：" + data.vehicle_id + '</br>';
        }
        if (data.vehicle_id != null) {
            content += "车牌号：" + data.vehicle_no + '</br>';
        }
        if (data.dmname != null) {
            content += "类 型：" + data.dmname + '</br>';
        }
        if (data.user_id != null) {
            content += "员工号：" + data.user_id + '</br>';
        }
        if (data.user_name != null) {
            content += "姓 名：" + data.user_name + '</br>';
        }
        if (data.speed != null) {
            content += "速 度：" + data.speed + '千米/小时 </br>';
        }
        if (data.ll_time != null) {
            content += "时 间：" + data.ll_time + '</br>';
        }
        if (data.remark != null) {
            content += "备 注：" + data.remark + '</br>';
        }
        //if (data.ext_field != null && data.ext_field != "" && data.ext_field != ";") {
        //    content += data.ext_field;
        //}
        // 没有员工就没有任务信息
        //if(taskStatus&&data.user_id) {
        //    content += "<div class='taskButton' onclick='showTaskInfo(\"" + data.device_id + "\")'>任务信息</div>";
        //}
        return content;
    }
}

/**
 * 格式化航班显示项
 * @param data
 * @returns {String}
 */
function formatFlightPopContent(data) {
    if (data) {
        if (data.flseq == null || data.flseq == "" || data.flno == null || data.flno == "") {
            return "";
        }
        var content = "";
        content += "航班号：" + data.flno + '</br>';
        if (data.regnumber != null) {
            if (data.regnumber.trim().length > 0) {
                content += "机 号：" + data.regnumber + '</br>';
            }
        }
        if (data.acname != null) {
            if (data.acname.trim().length > 0) {
                content += "机 型：" + data.acname + '</br>';
            }
        }
        if (data.adid != null) {
            var str = "";
            if (data.adid == "A") {
                str = "进港";
            }
            if (data.adid == "D") {
                str = "离港";
            }
            content += "进离港：" + str + '</br>';
        }
        if (data.vialc != null) {
            if (data.vialc.trim().length > 0) {
                content += "航线：" + data.vialc + '</br>';
            }
        }
        if (data.sto != null) {
            if (data.sto.trim().length > 0) {
                content += "计划时间：" + data.sto + '</br>';
            }
        }
        if (data.eto != null && data.eto != "") {
            if (data.eto.trim().length > 0) {
                content += "变更时间：" + data.eto + '</br>';
            }
        }
        if (data.ato != null && data.ato != "") {
            if (data.ato.trim().length > 0) {
                content += "实际时间：" + data.ato + '</br>';
            }
        }
        // 之后可以添加查询航班服务按钮
        return content;
    }
}

/**********************格式化浮云框内容  END********************/

/**********************跳转页面部分  START********************/

/**
* 跳转历史页面
*/
function toHistory(device_id, vechicle_id, user_id, user_name, typeCon) {
	var params = {};
	if (device_id != null && device_id != "null") {
		// params.deviceid = device_id;
	}
	if (vechicle_id != null && vechicle_id != "null") {
		params.vehicleid = vechicle_id;
	}
	if (user_id != null && user_id != "null") {
		params.userid = user_id;
	}
	if (user_id != null && user_id != "null") {
		params.username = user_name;
	}
	if (typeCon != null && typeCon != "null") {
		params.type = typeCon;
	}
	subWindows.histroy = openWindowWithPost(url.tohistory, 'history', params);

}

/**
 * 跳转报警页面
 * 
 * @param device_id
 * @param vechicle_id
 * @param user_id
 * @param user_name
 * @param typeCon
 */
function toAlert(device_id, vechicle_id, user_id, user_name, typeCon) {
	var params = {};
	if (device_id != null && device_id != "null") {
		// params.deviceid = device_id;
	}
	if (vechicle_id != null && vechicle_id != "null") {
		params.vehicleid = vechicle_id;
	}
	if (user_id != null && user_id != "null") {
		params.userid = user_id;
	}
	if (user_id != null && user_id != "null") {
		params.username = user_name;
	}
	if (typeCon != null && typeCon != "null") {
		params.type = typeCon;
	}
	subWindows.alert = openWindowWithPost(url.toalert, 'alert', params);
}
/**
 * 跳离线车辆转统计页面
 */
function toOffStatistics(){
    subWindows.offstatistics = openWindowWithPost(url.tooffstatistics, 'offstatistics');
}
/**
 * 跳查询里轨迹和报警页面
 */
function toQuery(){
    subWindows.toQuery = openWindowWithPost(url.query, 'toQuery');
}
/**
 * 跳转围界报警查询页面
 */
function toSafeQuery() {
	subWindows.safeQuery = openWindowWithPost(url.safeQuery, 'safeQuery');
}

/**
 * 跳转到实时监控页面
 */
function toEquipMentMonitor() {
    subWindows.equipMentMonitor = openWindowWithPost(url.equipMentMonitor, 'equipMentMonitor');
}

/**
 * 跳转基础数据页面
 */
function toDataManage() {
    subWindows.dataMange = openWindowWithPost(url.dataMange, 'dataMange');
}

/**
 * 跳转围界报警统计页面
 */
function toSafeStatistic() {
	subWindows.safeStatistic = openWindowWithPost(url.safeStatistic, 'safeStatistic');
}
/**
 * 跳转视频监控页面
 */
function toSafeMonitor() {
	subWindows.safeMonitor = openWindowWithPost(url.safeMonitor, 'safeMonitor');
}
/**
* 关闭所有子窗口
*/
function closeSubWindow() {
	var keys = Object.keys(subWindows);
	for ( var ii in keys) {
		subWindows[keys[ii]].close();
	}
}
/**********************跳转页面部分  END********************/

/**********************显示控制设置  START********************/

/**
 * 显示设置
 */
function displaySetUp() {
    $('#displaySetUpwin').show();
    if (displaySetting.fltlab) {
        $("#fltbtn").prop("checked", true);
    } else {
        $("#fltbtn").prop("checked", false);
    }
    if (displaySetting.reslab) {
        $("#resbtn").prop("checked", true);
    } else {
        $("#resbtn").prop("checked", false);
    }
    if (displaySetting.alert) {
        $("#alertlbtn").prop("checked", true);
    } else {
        $("#alertlbtn").prop("checked", false);
    }
    if (displaySetting.offlineResource) {
        $("#offlinelbtn").prop("checked", true);
    } else {
        $("#offlinelbtn").prop("checked", false);
    }
    if (displaySetting.mancarbinding) {
        $("#mancarbindinglbtn").prop("checked", true);
    } else {
        $("#mancarbindinglbtn").prop("checked", false);
    }
    $('#check_okbtn').unbind('click');
    $('#check_okbtn').click(function () {
        var old_displaySetting = {
            fltlab: displaySetting.fltlab,
            reslab: displaySetting.reslab,
            alert: displaySetting.alert,
            offlineResource: displaySetting.offlineResource,
            mancarbinding: displaySetting.mancarbinding
        };
        displaySetting.fltlab = $("#fltbtn").prop("checked");
        displaySetting.reslab = $("#resbtn").prop("checked");
        displaySetting.alert = $("#alertlbtn").prop("checked");
        displaySetting.offlineResource = $("#offlinelbtn").prop("checked");
        displaySetting.mancarbinding=$("#mancarbindinglbtn").prop("checked");
        if (old_displaySetting.fltlab != displaySetting.fltlab) {
            showLab('main_f_tree', displaySetting.fltlab);
        }
        if (old_displaySetting.reslab != displaySetting.reslab) {
            showLab('main_v_tree', displaySetting.reslab);
            showLab('main_p_tree', displaySetting.reslab);
        }

        if (old_displaySetting.offlineResource != displaySetting.offlineResource) {
            displayOfflineResource();
        }
        if (old_displaySetting.mancarbinding != displaySetting.mancarbinding) {
             displaymancarbinding();
        }
        $('#displaySetUpwin').window('close');
    });
    $('#check_cancelbtn').click(function () {
        $('#displaySetUpwin').window('close');
    });
    // 打开设置面板
    $('#displaySetUpwin').window('open');

}

/**
 * 设置航班、资源标签是否显示
 * @param show
 */
function showLab(treeid, show) {
    var type = null;
    if (treeid == "main_f_tree") {
        type = "F";
    }
    if (treeid == "main_v_tree") {
        type = "V";
    }
    if (treeid == "main_p_tree") {
        type = "P";
    }
    var markers = ssMap.markers;
    for (var i in markers) {
        var marker = markers[i];
        if (marker.resourceType == type) {
            marker.displayLabel(show);
        }
    }
}
/**
 * 控制离线资源是否显示
 */
function displayOfflineResource() {
    var display = $("#offlinelbtn").is(":checked");
    var markers = ssMap.markers;
    if (!display) {
        for (var index in markers) {
            var marker = markers[index];
            var online = marker.online;// 是否在线标志
            var resourceType=marker.resourceType;
            if (!online&&(resourceType=='V'||resourceType=='P')) {
                hideMarkerAndTnode(marker);
            }
        }
    }
    else {
        for (var index in markers) {
            var marker = markers[index];
            var mid = marker.mid;
            var online = marker.online;// 是否在线标志
            var resourceType=marker.resourceType;
            var treeid;
            if(resourceType=='V'){
                treeid='main_v_tree';
            }
            if(resourceType=='P'){
                treeid='main_p_tree';
            }
            if (!online&&(treeid == 'main_v_tree' && marker.resourceType == 'V') || (treeid == 'main_p_tree' && marker.resourceType == 'P')) {
                var pnode = leftTree.getParentRoot(treeid, mid);
                if (pnode != null) {
                    var isOpen = pnode.state == 'open' ? true : false;
                    if (isOpen) {
                        showMarkerAndTnode(marker);
                    }
                }
            }
        }
    }

    leftTree.getLeafAmount(getCurrentTree());
}
/**
 * 控制显示与隐藏人车绑定的文字注记
 */
function displaymancarbinding(){
    var display = $("#mancarbindinglbtn").is(":checked");
    var markers = ssMap.markers;
    for (var index in markers) {
        var marker = markers[index];
        var resourceType=marker.resourceType;
        var displayResouceLabel=marker.displayResourceLabel;
        if (resourceType=='V'&&displayResouceLabel==true) {
            marker.displayMancarLabel(display);
        }
    }
}


/**********************显示控制设置  END********************/

/**********************资源树节点与地图Marker交互  START********************/
/**
 * 跳转tab
 * @param typ  类型
 * @param back 是否返回当前
 */
function jumpTab(typ, back) {
    var tabId = 0;
    if (typ == "V") {
        tabId = 0;
    } else if (typ == "P") {
        tabId = 1;
    } else if (typ == "F") {
        tabId = 2;
    }
    $("#treegrid").tabs('select', tabId);
}
/**
 * 当前选择的资源树类型
 * @returns {*}
 */
function getCurrentTree() {
    var treeId;
    if (selectTab == 0) {
        treeId = "main_v_tree";
    }
    else if (selectTab == 1) {
        treeId = "main_p_tree";
    }
    else if (selectTab == 2) {
        treeId = "main_f_tree";
    }
    return treeId;
}
/**
 * 当前所选择的资源类型
 * @returns {string}
 */
function getCurrentResourceType() {
    var resourceType = '';
    if (selectTab == 0) {
        resourceType = "V";
    }
    else if (selectTab == 1) {
        resourceType = "P";
    }
    else if (selectTab == 2) {
        resourceType = "F";
    }
    return resourceType;
}

/**
 * 左侧资源树tab选择事件,显示资源数量
 * @param title
 * @param index
 */
function lefttreeSelect(title, index) {
    if (leftTree == undefined)
        return;
    selectTab = index;
    var treeid = getCurrentTree();
    $('.amountspan').hide();
    $('#' + treeid + '_amount').show();
    resourcesAmount(treeid);
}
/**
 * 显示统计数量
 * @param treeId
 */
function resourcesAmount(treeId) {
    var treeid = getCurrentTree();
    if (treeid != treeId)
        return;
    var resourceType = getCurrentResourceType();
    var markers = ssMap.markers;
    var amount = 0;
    for (var index in markers) {
        var marker = markers[index];
        if (marker.visible && marker.resourceType == resourceType) {
            amount += 1;
        }
    }
    var $amount = $("#" + treeId + "_amount");
    $amount.find("span").text(amount);
}

/**
 * 隐藏ssMap的Marker,同时隐藏对应的treegrid节点
 * @param marker
 */
function hideTreeTnode(marker) {
   var isdisplay = $("#offlinelbtn").is(":checked");
   var online=marker.online;
   if(isdisplay){
	   
   }
   else{
	   if(!online)
	       hideMarkerAndTnode(marker);
   }
}
/**
 * 隐藏ssMap的Marker,同时隐藏对应的treegrid节点
 * @param marker
 */
function hideMarkerAndTnode(marker) {
    if (marker == null)
        return;
    if (marker.visible) {
        marker.display(false);
        ssMap.hidePopup(marker.mid);
    }
    $("tr[node-id='" + marker.mid + "']").hide();
}

/**
 * 显示ssMap的Marker,同时显示对应的treegrid节点
 * @param marker
 */
function showMarkerAndTnode(marker) {
    if (marker == null)
        return;
    if (!marker.visible) {
        var resourceType = marker.resourceType;
        var displaylabel = true;
        if (resourceType == 'P' || resourceType == 'V') {
            displaylabel = displaySetting.reslab;
        }
        if (resourceType == 'F') {
            displaylabel = displaySetting.fltlab;
        }
        marker.display(true);
        marker.displayLabel(displaylabel);

        $("tr[node-id='" + marker.mid + "']").show();
    }
}

/**
 * 设置车辆图标上线状态
 * @param id
 * @param status  true/false 有无信号
 */
function changeMarkerOnlineIcon(id, status) {
    if (id) {
        var marker = ssMap.getMarker(id);
        if (marker) {
            var url = marker.iconUrl;
            var online;
            var url1, url2;
            url1 = url.substring(0, url.length - 5);
            url2 = url.substring(url.length - 4, url.length);
            if (status) {  // 有信号
                url = url1 + "T" + url2;
                online=true;
            } else {  // 退出
                url = url1 + "F" + url2;
                online=false;
            }
            marker.updateMarkerIcon(url,online);
        }
    }
}

/**
 * 改变marker图标任务状态
 * @param id
 * @param taskStatus 有无任务
 */
function changeMarkerTaskIcon(id, taskStatus) {
    if (id) {
        var marker = ssMap.getMarker(id);
        marker.updateTaskStatus(taskStatus);
        ssMap.updatePopup(id);
    }
}

/**********************资源树节点与地图Marker交互  END********************/

/**********************报警消息处理   START********************/

/**
 * 显示报警
 * @param val
 */
var alertTimeoutHandler;
var alertWindowOpen=false;
var isCollapse=false;
function showAlertMsg(am) {
    if (am == null || am == undefined)
        return;
    var html = "";
    html += "<div onclick='panToMarker(\"" + am.device_id + "\")'>";
    html += "<span>" + am.ll_time + "</span>";
    html += "</br>";
    html += "<span>" + am.alert_info + "</span>";
    html += "</div></br>";
    if (msgData.length < 5) {
        msgData.push(html);
    } else {
        msgData.shift();
        msgData.push(html);
    }
    var msghtml = "";
    for (var i = 0; i < msgData.length; i++) {
        msghtml += msgData[i];
    }
    if (!alertWindowOpen) {
        var domHeight = $(window).height();
        var domWidth = $(window).width();
        $("#alertMsgwin").window({
            top: domHeight - 350,
            left: domWidth - 250,
            collapsed:false,
            onClose:function(){
                alertWindowOpen=false;
            },
            onCollapse:function(){
                $("#alertMsgwin").window('move',{
                    left: domWidth - 250,
                    top: domHeight - 40
                });
                isCollapse=true;
            },
            onExpand:function(){
                $("#alertMsgwin").window('move',{
                    left: domWidth - 250,
                    top: domHeight - 350
                });
                isCollapse=false;
            },
            onBeforeOpen:function(){
                if(isCollapse){
                    $("#alertMsgwin").prev("div").find('a.panel-tool-collapse').trigger('click');
                }
            }
        });
        $('#alertMsgwin').window('open');
        alertWindowOpen=true;
    }
    $("#alertMsgwinContent").html(msghtml);

    // 设置若干秒后关闭
    if (alertTimeoutHandler) {
        clearTimeout(alertTimeoutHandler);
    }
    alertTimeoutHandler = setTimeout(function () {
        $('#alertMsgwin').window('close');
        alertTimeoutHandler=null;
    }, alertShowTime);
}

/**
 * 格式化报警
 * @param am
 * @returns {String}
 */
function formatAlert(am) {
	if (am == null || am == undefined)
		return "";
	var html = "";
	html += "<div onclick='panToMarker(\"" + am.device_id + "\")'>";
	html += "<span>" + am.ll_time + "</span>";
	html += "</br>";
	html += "<span>" + am.alert_info + "</span>";
	html += "</div>";
	return html;
}

/**********************报警消息处理   END********************/

/**********************点击机位显示航班列表   START********************/

/**
 * 显示该机位上的航班
 * @param data  机位MarkerID
 */
function showFltsByPsn(data) {
    var id = data;
    if (data) {
        var psnm = data.split("_")[1];
        if (psnm) {
            var parm = "psn=" + psnm;
            $.ajax({
                type: "post",
                url: url.flt,
                data: parm,
                dataType: 'json',
                error: function () {
                     console.log("机位获取航班数据失败");
                     ssMap.showPopup(id, "获取航班数据失败");
                },
                success: function (dataJson) {
                    if (dataJson) {
                        if (dataJson.success == false) {
                            info(dataJson.msg);
                        } else {
                            if (dataJson.obj == null || dataJson.obj == undefined) {
                                ssMap.showPopup(id, "获取航班数据失败");
                                return;
                            }
                            if (dataJson.obj.length == 0) {
                                ssMap.showPopup(id, "无航班数据");
                                return;
                            }
                            // 打开显示机位上的航班
                            setPsnPopup(id, dataJson.obj);
                        }
                    }
                }
            });
        }
    }
}

/**
 * 获得的航班数据显示在表格里
 * @param id
 * @param data
 */
function setPsnPopup(id, data) {
    var html = "<table id='psn_datagrid'></table>";
    ssMap.showPopup(id, html);
    $("#psn_datagrid").datagrid({
        fit: true,
        rownumbers: false,
        animate: true,
        collapsible: true,
        fitColumns: false,
        autoRowHeight: false,
        striped: true,  // 斑马线
        data: data,
        showFooter: false,
        columns: [[
            {field: 'regnumber', title: '飞机号', width: 50, sortable: true},
            {field: 'flno', title: '航班号', width: 60, sortable: true},
            {field: 'acname', title: '机型', width: 60, sortable: true},
            {
                field: 'time', title: '时间', width: 60, sortable: false,
                styler: function (value, row, index) {
                    if (row.adid == 'A') {
                        if (row.ato != null && row.ato != "") {
                            return 'background-color:red';
                        } else if (row.eto != null && row.eto != "") {
                            return 'background-color:blue';
                        } else if (row.sto != null && row.sto != "") {
                            return 'background-color:green';
                        }

                    }
                    if (row.adid == 'D') {
                        if (row.atot != null && row.atot != "") {
                            return 'background-color:red';
                        } else if (row.etot != null && row.etot != "") {
                            return 'background-color:blue';
                        } else if (row.stot != null && row.stot != "") {
                            return 'background-color:green';
                        }
                    }
                },
                formatter: function (value, row, index) {
                    if (row.ato != null && row.ato != "") {
                        return formatHm(row.ato);
                    } else if (row.eto != null && row.eto != "") {
                        return formatHm(row.eto);
                    } else if (row.sto != null && row.sto != "") {
                        return formatHm(row.sto);
                    }
                }
            },
            {field: 'adid', title: '进离', width: 40, align: 'center'}
        ]]
    });

}

/**********************点击机位显示航班列表   END********************/

/**********************浮云框中任务列表   START********************/

/**
 * 创建任务表格
 */
function iniTaskTable(containerId, data,scrollLeft,scrollTop) {
	var tablehtml= createTaskTable(data);
	$('#'+containerId).html(tablehtml);
    var innerTable=$('#taskdiv');
    innerTable.scrollLeft(scrollLeft);
    innerTable.scrollTop(scrollTop);
}
/**
 * 查询新上线车辆当前的任务
 * @param user_id
 */
function queryNewDeviceTaskList(user_id) {
    if (user_id==null || user_id.length == 0) {
        return null;
    }
    var taskCollection = null;
    var parm = "usid=" + user_id;
    parm += "&uid=" + uid;
    parm += "&sid=" + sid;
    $.ajax({
        type: "get",
        url: url.task,
        async:false,
        data: parm,
        dataType: 'json',
        error: function () {
            console.log("查询用户"+user_id+"当前执行的任务数据失败");
        },
        success: function (val) {
            if (val) {
                if (val.success == false) {
                  //  info(val.msg);
                } else {
                    var tasks = val.obj;
                    // 显示任务数据 ;
                    if (tasks && tasks.length > 0) {
                        taskCollection = getTaskCollection(tasks);
                    }
                }
            }
        }
    });
    return taskCollection;
}

/**
 * 获取任何集合：列表转换为集合
 * @param taskList
 * @returns {ol.Collection}
 */
function getTaskCollection(taskList){
    var taskCollection=new ol.Collection();
    for(var index in taskList){
        var task=taskList[index];
       taskCollection.updateItem(task,'tnb','update');
    }

   return taskCollection;
}
/**
 * 显示任务信息
 * @param id  员工号
 */
function showTaskInfo(user_id) {
    var parm = "usid=" + user_id;
    parm += "&uid=" + uid;
    parm += "&sid=" + sid;
    $.ajax({
        type: "get",
        url: url.task,
        data: parm,
        dataType: 'json',
        error: function () {
            info("获取任务数据失败");
        },
        success: function (val) {
            if (val) {
                if (val.success == false) {
                    info(val.msg);
                } else {
                    // 显示任务数据 ;
                    if (val.obj) {
                        if (val.obj.length == 0) {
                            info("当前没有正在进行的任务");
                            return;
                        }
                        var domWidth = $(window).width();
                        var taskWindow= $("#taskInfoDetail");
                        taskWindow.window({top: 70});
                        taskWindow.window({left: domWidth - 550});
                        iniTaskTable("taskInfoDetailContent", val.obj,0,0);
                        taskWindow.window("open");  // 打开窗口
                    }
                }
            }
        }
    });
}

/**
 * 组装任务表格，替代easyui table提高渲染效率
 * @param tasks
 */
function createTaskTable(tasks){
	var html='<div id="taskdiv" class="taskdiv"><table class="tasktable_class"><thead class="taskthead_class"><tr><td class="table-cell-c4-flno">航班号</td><td class="table-cell-c4-regn">机号</td><td class="table-cell-c4-rtnm">类型</td><td class="table-cell-c4-tenm">员工</td><td class="table-cell-c4-tstn">状态</td><td class="table-cell-c4-sdat">时间</td></tr></thead><tbody class="tasktbody_class">';
		for(var i in tasks){
			html+='<tr>';
			var task=tasks[i];
			var tds='<td>'+task.flno+'</td><td>'+task.regn+'</td><td>'+task.rtnm+'</td><td>'+task.tenm+'</td><td>'+task.tstn+'</td><td>'+task.sdat+'</td>';
			html+=tds;
			html+='</tr>';
		}
		html+='</tbody></table></div>';
		
		return html;
}
/**********************浮云框中任务列表   END********************/


/**********************切换车辆显示编号   START********************/

var vehicle_showtype;
/**
 * 初始化车辆显示编号类型
 */
function initVehicleShowType() {
    var value = localStorage.getItem(uid + "_vehicle_showtype");
    if (value == null || value == '') {
        vehicle_showtype = 'selfno';
        localStorage.setItem(uid + "_vehicle_showtype", vehicle_showtype);
    }else{
    	vehicle_showtype=value;
    }
    $("input[name='vehicle_show_type'][value='"+value+"']").attr("checked","checked");

}
/**
 * 切换化车辆显示编号类型
 */
function changeShowVehicleName() {
    var oldValue = vehicle_showtype;
    var showtype = $("input[name='vehicle_show_type']:checked").val();
    if (window.confirm('切换显示车辆号码格式，需要重新加载当前页面？')) {
        vehicle_showtype = showtype;
        localStorage.setItem(uid + "_vehicle_showtype", vehicle_showtype);
        window.location.reload(true);
    }
    else {
        $("input[name='vehicle_show_type'][value='"+showtype+"']").prop("checked",false);
        $("input[name='vehicle_show_type'][value='"+oldValue+"']").prop("checked",true);

    }
}
/**********************切换车辆显示编号   END********************/

/**********************通用方法定义   START********************/
/**
 * 切换地图缩放级别
 */
function mapZoomTo(zoom, lon, lat) {
    ssMap.zoomTo(zoom, [lon, lat]);
}

/**
 * 检查登录
 */
var checkLogin = function () {
    if (uid == null || uid == "" || sid == null || sid == "") {
        window.location.href = "./pages/error.html";
        return false;
    }
    return true;
};

/**
 * 检查是否离线,GPS信号可能出现延迟
 * @param gpsTm
 * @returns {Boolean}
 */
function checkOnLine(gpsTm) {
    if (gpsTm == undefined || gpsTm == null) return;
    var now = new Date();
    var nowTm = now.getTime();
    var gpsTm = stringToTime(gpsTm);
    if ((nowTm - gpsTm) > offLineTime) {
        return false; // 不在线
    } else {
        return true;  // 在线
    }
}

/**
 * 设置长时间没有信号离线图标
 * @param id
 * @returns
 */
function timeoutFunction(id) {
    if (id) {
        var marker = ssMap.getMarker(id);
        if (marker) {
            var contentHtml=marker.feature.get("contentHtml");
            if(contentHtml){
                var reg=new RegExp("速 度：[0-9.]+千米");
                var s="速 度：0千米";
                contentHtml=contentHtml.replace(reg, s);
                marker.feature.set("contentHtml",contentHtml);
            }
            var popup_contentHtml=$("#popup-content").html().replace(reg, s);
            $("#popup-content").html(popup_contentHtml);
            marker.online = false;  // 置marker下线
            changeMarkerOnlineIcon(id, false);
            var tree = null;
            if (marker.resourceType=="V") {
                tree = "main_v_tree";
            }
            else if (marker.resourceType=="P") {
                tree = "main_p_tree";
            }
            leftTree.changeOffLineNodeIcon(id, false, tree);
            if (!displaySetting.offlineResource) {
                hideMarkerAndTnode(marker);
                leftTree.getLeafAmount(getCurrentTree());
            }
        }
    }
}


/**
 * 资源树查询
 * @param val 输入框里的内容
 */
function findItem() {
    var val = $("#miniKeybox").val();
    if (val) {
        val = val.trim();
        if (val.length < 2) {
            return;
        }
        // 遍历三颗树，如果树节点的显示内容与输入值有相似，取出ID
        // indexOf(value) != -1
        // 将树节点背景置为选中状态
        // 地图移动到该元素
        var tree_obj = leftTree.trees_obj;
        var tree_Nodes = [];
        $.each(tree_obj, function (index, v) {
            // 在某树中查找节点
            tree_Nodes = leftTree.searchTreeNode(v, val);
            if (tree_Nodes.length > 0) {
                $("#" + v).treegrid('select', tree_Nodes[0].id);
                ssMap.panToMarker(tree_Nodes[0].id);
                $("#treegrid").tabs('select', index);
                return false;
            }
        });
    }
}

/**
 * 移动到地图上的图标
 */
function panToMarker(id) {
    if (id) {
        id.trim();
        ssMap.panToMarker(id);
    }
}

/**
 * 在树节点上点击任务按钮
 *
 * @param id
 * @param uid
 */
function queryTaskOnTree(id, uid) {
    if (id) {
        id.trim();
        ssMap.panToMarker(id);
    }
   // showTaskInfo(uid);  // 查询任务详情
}

/**
 * 账号注销
 */
function logOut() {
    $.messager.confirm('确定退出', '您想要退出该系统吗？', function (r) {
        if (r) {
            closeSubWindow();
            window.location.href ="../userController/logout.action" + "?uid=" + uid + "&sid=" + sid;
            closeMqttSocket();

        }
    });
}
/**
 * 同一账号异地登录，被强退
 */
function kickoffOut() {
    closeMqttSocket();
    window.location.href = url.logout + "?uid=" + uid + "&sid=" + sid+"&logout=Kickoff";
}


/**
 * 在下方信息窗口写入提示信息
 * @param msg
 */
function info(msg, container) {
    var msg_div;
    if (container == null || container == undefined) {
        msg_div = $("#info");
    } else {
        msg_div = $("#" + container);
    }
    if (msg_div == undefined) return;
    if (msg) {
        msg_div.html(msg);
    }
    setTimeout(function () {
        msg_div.html("");
    }, 5000);
}

/**
 * 清除设备（定位盒）-车辆和设备(手持机)-人员之间的过期关系数据
 * @param val
 */
function cleanExpiredVehicle(val) {
    var vehicle_id = val.vehicle_id;
    var device_id = val.device_id;
    var user_id = val.user_id;
    var type = val.type;
    if (type == "V") {
        var old_device_id=device_vehicle_rl[vehicle_id];
        if(old_device_id&&old_device_id!=device_id){
            leftTree.deleteTreeNode("main_v_tree", old_device_id);
            ssMap.deleteMarker(old_device_id,LayerConfig.device.name);
            delete device_vehicle_rl[vehicle_id];
        }
    }
    else if (type == "P") {
        var old_device_id=device_person_rl[user_id];
        if(old_device_id&&old_device_id!=device_id){
            leftTree.deleteTreeNode("main_p_tree", old_device_id);
            ssMap.deleteMarker(old_device_id,LayerConfig.device.name);
            delete device_person_rl[user_id];
        }
    }
}

document.onkeydown = function () {
    if (event.keyCode == 122) {
        event.keyCode = 0;
        event.returnValue = false;
    }  //屏蔽F11
};
/**********************通用方法   END********************/