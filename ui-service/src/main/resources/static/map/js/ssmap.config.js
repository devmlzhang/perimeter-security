window.mapResUrl = '/static/map/';
window.onImageLoadErrorImage = window.mapResUrl + "tiles/blank.png";
var MapConfig = {
	airports : {
		PEK : {
			angle : 90* Math.PI / 180,//顺时针方向旋转
			center : [ 12979736.5429058, 4878891.55056170 ],
			compass : "/static/map/img/compass/pek.png",
			extent:[12971614.984,4876701.592,12984712.067999998,4883250.134],
			layers : [ {
				name : "机场",
                tileUrl: mapResUrl + "tiles/pek/{z}/{y}/{x}.png"
                //tileUrl: "http://172.16.10.111/map/pek/1.0.6/tiles/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
			offset : [ 0, 0 ],
			title : "北京首都国际机场",
            resetScale:true    //地图注记是否随着地图的比例尺变化而改变大小
		},
		GOS : {
			angle : 0 * Math.PI / 180,
			center : [13292252.22,4854497.777],
			compass : "/static/map/img/compass/gos.png",
			//compass : "../../map/img/compass/gos.png",
			extent : [13291243.883, 4853601.121,13293260.566,4855394.433],
			layers : [ {
				name : "公司",
				tileUrl : mapResUrl + "tiles/gos/{z}/{y}/{x}.png"
			} ],
            maxResolution : 9.554628535647031,
            numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 23,
            defaultZoom: 14,
            offset : [ 0, 0 ],
			title : "天津公司",
            resetScale:true
        },
		HET : {
			angle : 17.3 * Math.PI / 180,
			center : [ 12448260.59, 4990617.512 ],
			compass : mapResUrl + "img/compass/het.png",
			extent : [ 12444962.473, 4989358.858, 12451752.962, 4992449.541 ],
			layers : [ {
				name : "机场",
				tileUrl : mapResUrl + "tiles/het/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
			offset : [ 0, 0 ],
			title : "呼和浩特白塔国际机场",
            resetScale:true
        },
		XIY : {
			angle : 41.33 * Math.PI / 180,
			center : [ 12107479.55, 4087823.971 ],// 12106515.989, 4088798.027
			compass : mapResUrl + "img/compass/xiy.png",
			extent : [ 12104024.831, 4086252.739, 12111404.001, 4089922.271 ],
			layers : [ {
				name : "机场",
				tileUrl : mapResUrl + "tiles/xiy/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
			minZoomLevel: 14,
	        maxZoomlevel: 19,
	        defaultZoom: 14,
			offset : [ 0, 0 ],
			title : "西安咸阳国际机场",
            resetScale:true
		},
		SZX : {
			angle : 296.792 * Math.PI / 180,
			center : [ 12668978.82, 2588004.937 ],
			compass : mapResUrl + "img/compass/szx.png",
			extent : [ 12663127.09, 2585671.535, 12674830.54, 2590338.339 ],
			layers : [ {
				name : "机场",
				tileUrl : mapResUrl + "tiles/szx/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
			minZoomLevel: 14,
	        maxZoomlevel: 19,
	        defaultZoom: 14,
			offset : [ 0, 0 ],
			title : "深圳宝安机场",
            resetScale:true
		},
		CTU : {
			angle : 68.19 * Math.PI / 180,
			center : [ 11571583.59, 3574419.921 ],
			compass : mapResUrl + "img/compass/ctu.png",
			extent : [ 11566407.21, 3568935.79, 11577662.44, 3577524.881 ],
			layers : [ {
				name : "机场",
                tileUrl: mapResUrl + "tiles/ctu/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
			offset : [ 0, 0 ],
			title : "成都双流国际机场",
            resetScale:true
		},
        PVG : {
            angle : 288 * Math.PI / 180,
            center : [13558429.61,3651808.182],
            compass : mapResUrl + "img/compass/pvg.png",
            extent : [13553370.643,3648993.435, 13563723.356,3656277.816],
            layers : [ {
                name : "机场",
                tileUrl: mapResUrl + "tiles/pvg/{z}/{y}/{x}.png"
            } ],
            maxResolution : 9.554628535647031,
            numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
            offset : [ 0, 0 ],
            title : "上海浦东国际机场",
            resetScale:true
        },
        HGH : {
            angle : 27.1 * Math.PI / 180,
            center : [13406166.23,3534030.894],
            compass : mapResUrl + "img/compass/hgh.png",
            extent : [13402755.372 ,3532375.573, 13409879.819,3535983.395],
            layers : [ {
                name : "机场",
                tileUrl: mapResUrl + "tiles/hgh/{z}/{y}/{x}.png"
            } ],
            maxResolution : 9.554628535647031,
            numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
            offset : [ 0, 0 ],
            title : "杭州萧山国际机场",
            resetScale:true
        },
    	TSN : {
			angle :295.5 * Math.PI / 180,
			center : [13064197.57, 4739858.233],
			compass : mapResUrl +"img/compass/tsn.png",
			extent : [ 13059780.021,4735575.53,13070355.373,4744041.932 ],//
			layers : [ {
				name : "机场",
				tileUrl : mapResUrl + "tiles/tsn/{z}/{y}/{x}.png"
			} ],
			maxResolution : 9.554628535647031,
			numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
			offset : [ 0, 0 ],
			title : "天津滨海国际机场",
            resetScale:true
		},
        YNT:{

            angle : 48 * Math.PI / 180,
            center : [13467692,4531498.5],
            compass : mapResUrl +"img/compass/ynt.png",
            extent : [ 13464760.328,4529818.666,13469881.025,4532379.0145000005 ],//
            layers : [ {
                name : "机场",
                tileUrl : mapResUrl + "tiles/ynt/{z}/{y}/{x}.png"
            } ],
            maxResolution : 9.554628535647031,
            numZoomLevels : 6,
            minZoomLevel: 14,
            maxZoomlevel: 19,
            defaultZoom: 14,
            offset : [ 0, 0 ],
            title : "山东烟台蓬莱机场",
            resetScale:true
        }
	},
	mapStyles : {
		symbols : {
			Point : {
				pointRadius : 5,
				graphicName : "circle",
				fillColor : "white",
				fillOpacity : 0.0,
				strokeWidth : 1,
				strokeOpacity : 1,
				strokeColor : "#333333"
			},
			Line : {
				strokeWidth : 2,
				strokeOpacity : 1,
				strokeColor : "#666666",
				strokeDashstyle : "dash"
			},
			Polygon : {
				strokeWidth : 2,
				strokeOpacity : 1,
				strokeColor : "#666666",
				fillColor : "white",
				fillOpacity : 0.3
			}
		},
		// 唯一值
		uniqueValues : {
			colors : [ "#004444", "#660066", "#666666", "#66cc66", "#990066",
					"#996666", "#000066", "#99cc66", "#cc0066", "#cc6666",
					"#cccc66", "#ff0066", "#ff6666", "#ffcc66", "#006666",
					"#00cc66", "#330066", "#336666" ]
		}
	}
};

var LayerConfig= {
    device: {name: 'device', title: '设备', zoom: 1},
    psn: {name: 'psn', title: '机位', zoom: 16,textSize:{16:"14px",17:"17px",18:"19px",19:"21px"}},
    flight: {name: 'flt', title: '飞机', zoom: 14},
    alert: {name: 'alert', title: '报警', zoom: 14},
    route: {name: 'route', title: '轨迹', zoom: 14},
    draw: {name: 'draw', title: '绘制', zoom: 14}
};