

function initMap() {
    // 初始化地图
    if (!ssMap) {
        ssMap = new SSMap("map", 'GOS');
    }
    ssMap.showPostionDiv = "showxy";
    ssMap.show();
    SafeAreaShow.init(ssMap);

}

function adjustLayout() {
    var domHeight = $(window).height();
    var domWidth = $(window).width();
    var rgtMap = $("#rightMap");
    var headH = $("#headerDiv").height();
    var searchH = $("#searchBarDiv").height();
    var bottomH = $("#bottom").height();
    var mapToolBar = $("#mapToolBar");
    var content = $("#mapBox");
    var height = domHeight - headH - searchH - bottomH;

    content.css({ width: domWidth + "px", height: height - mapToolBar.height() + "px", 'magin-top': mapToolBar.height() + "px"});
    rgtMap.css({ width: domWidth + "px", height: height + "px",right: "0px", top: "auto" });

    $('.rightContent').width(domWidth - $('.leftContent').width() - 2 + 'px');

    $('#gridContainer').css('top', $('#searchTool').height()+'px');
}



var SafeAreaShow={
    ssMap:null,
    url:{
        areaUrl:'../mapdata/areapoi.action',
        defenceareaUrl:'../mapdata/defencepoi.action'
    },
    init:function(ssMap){
        this.ssMap=ssMap;
        this.ssMap.addLayer('areaLayer', '区域', 14);
        this.ssMap.addLayer('defenceareaLayer', '防区', 14);
        this.ssMap.addLayer('cameraLayer', '球机', 14);
        this.ssMap.addLayer('radarLayer', '雷达', 14);
        this.ssMap.addLayer('warningLayer', '入侵物体', 14);
        this.ssMap.addLayer('warningTraceLayer', '入侵轨迹', 14);
    }

};
