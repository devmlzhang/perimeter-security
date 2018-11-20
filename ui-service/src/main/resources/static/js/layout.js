(function () {
	$(window).resize(function () {
    	layout.leftLayout();
        layout.rightLayout();
    });
	var Layout ={
		isShowLeftNav:true,//是否显示leftnav
		isShowRightNav:true,//是否显示leftnav
		
		isAnimate:true,//是否动画伸缩leftnav
		isFullScreen:false,
		
		DrawRight: undefined,//左侧栏动画对象
        DrawRightTimer: 10,//左侧栏动画执行时间
        DrawRightSpeed: 30,//左侧栏执行速度
        
		DrawLeft: undefined,//左侧栏动画对象
        DrawLeftTimer: 10,//左侧栏动画执行时间
        DrawLeftSpeed: 30,//左侧栏执行速度
		///布局初始化方法
        initLayout: function () {
        	layout.leftLayout();
            layout.rightLayout();
            Layout.onChangeEvent();
        },
        //左侧布局
        leftLayout:function(){
        	var domHeight = $(window).height();
        	var domWidth = $(window).width();
            var lftNav = $("#leftNav");
            var main_v_tree = $("#main_v_tree");
            var treegrid = $("#treegrid");
            var headH = $("#headerDiv").height();
            var searchH = $("#searchBarDiv").height();
            var leftTopBarDivH = $("#leftTopBarDiv").height();
            var bottomH = $("#bottom").height();

        	if(Layout.isFullScreen){
        		$("#fullScreen").html("退出全屏");
        		if(Layout.isShowLeftNav){
	       			 $("#openLeftNav").css("display", "none");
	       			 lftNav.css({ height: domHeight + "px", display: "", left: "0px" });
	       		}else{
	       			$("#openLeftNav").css("display", "");
	       			lftNav.css({ height: domHeight + "px", left: -lftNav.width() + "px", display: "none" });
	       		}
        	}else{
        		$("#fullScreen").html("全屏");
        		if(Layout.isShowLeftNav){
        			$("#openLeftNav").css({display:"none"});
        			lftNav.css({ height: (domHeight - headH - searchH - bottomH) + "px", display: "", left: "0px" });
        		}else{
        			$("#openLeftNav").css({display:""});
        			lftNav.css({ height: (domHeight - headH - searchH - bottomH) + "px", left: -lftNav.width() + "px", display: "none" });
        		}
        	}
            $("#tree").css({height: lftNav.height() - leftTopBarDivH + "px"});
            treegrid.tabs('resize');
        },
        //右侧布局
        rightLayout:function(){
        	var domHeight = $(window).height();
            var domWidth = $(window).width();
            var lftNav = $("#leftNav");
            var rgtMap = $("#rightMap");
            var headH = $("#headerDiv").height();
            var searchH = $("#searchBarDiv").height();
            var bottomH = $("#bottom").height();
            var mapToolBar = $("#mapToolBar");
            var mapbox = $("#mapBox");
            
            var mapWidth = 0;
            if(Layout.isShowLeftNav){
            	mapWidth = domWidth - lftNav.width();
            }else{
            	mapWidth = domWidth;
            }
            var toolsHeight = mapToolBar.height();
            if(Layout.isFullScreen){
            	$("#fullScreen").html("退出全屏");
            	mapbox.css({ width: mapWidth + "px", height: domHeight - toolsHeight + "px" });
            	rgtMap.css({ width: mapWidth + "px", height: domHeight + "px",right: "0px", top: "0px" });
                lftNav.css({ top: "0px" }); //解决IE6下top两像素的bug
            }else{
            	$("#fullScreen").html("全屏");
            	var height = domHeight - headH - searchH - bottomH;
            	mapbox.css({ width: mapWidth + "px", height: height - toolsHeight + "px" });
                rgtMap.css({ width: mapWidth + "px", height: height + "px",right: "0px", top: "auto" });
                lftNav.css({ top: "auto" }); //解决全屏IE6下left  两像素的bug
            }
        },
        //展示
        showLeftNav: function () {
            var leftbar = $("#leftNav");
            clearInterval(Layout.DrawLeft);
            leftbar.css("display", "");
            Layout.onChangeEvent();
            Layout.DrawLeft = setInterval(function () {
                leftbar.css("display", "");
                var left = leftbar.offset().left;
                if (left < 0) {
                    $("#leftNav").css({ left: (left + Layout.DrawLeftSpeed) + "px" });
                } else {
                    $("#openLeftNav").css("display", "none");
                    $("#leftNav").css("left", "0px");
                    Layout.isShowLeftNav = true;
                    Layout.rightLayout();
                    clearInterval(Layout.DrawLeft);
                }
                var viewReport=ssMap.olMap.getViewport();
                viewReport.width=$("#rightMap").width();
                ssMap.olMap.updateSize();
            }, Layout.DrawLeftTimer);
        },
        //隐藏
        hideLeftNav: function () {
            var domWidth = $(window).width()-200;
            var leftbar = $("#leftNav");
            var leftWidth = leftbar.width();
            clearInterval(Layout.DrawLeft);
            leftbar.css("display", "");
            Layout.onChangeEvent();
            Layout.DrawLeft = setInterval(function () {
                var left = leftbar.offset().left;
                if ((-left) <= leftWidth) {
                	$("#rightMap").css("width", domWidth + "px");
                    $("#leftNav").css({left: (left - Layout.DrawLeftSpeed) + "px" });
                } else {
                    $("#leftNav").css({left: (-leftWidth) + "px"});
                    $("#openLeftNav").css("display", "");
                    Layout.isShowLeftNav = false;
                    Layout.rightLayout();
                    clearInterval(Layout.DrawLeft);
                }
                var viewReport=ssMap.olMap.getViewport();
                viewReport.width=$("#rightMap").width();
                ssMap.olMap.updateSize();
            }, Layout.DrawLeftTimer);
        },
        //展示右侧
        showRight: function () {
//        	var domHeight = $(window).height() - 760;
            var domWidth = $(window).width() - 760;
            var rgtMap = $("#rightMap");            
            var leftbar = $("#leftNav");
            clearInterval(Layout.DrawRight);
            leftbar.css("display", "");
            Layout.onChangeEvent();
            Layout.DrawRight = setInterval(function () {
                leftbar.css("display", "");
                var left = rgtMap.offset().left;
                if (left > 760) {
                    $("#rightMap").css({ left: (left - Layout.DrawRightSpeed) + "px" });
                } else {
                    $("#openRightNav").css("display", "none");
                    $("#closeRightNav").css("display", "");
                    $("#rightMap").css({ left: 760 + "px" });
                    $("#leftNav").css("width", 760 + "px");
                    Layout.isShowRightNav = true;
                    Layout.rightLayout();
                    clearInterval(Layout.DrawLeft);
                }
            }, Layout.DrawRightTimer);
        },
        //隐藏
        hideRight: function () {
            var domWidth = $(window).width();
            var right = $("#rightMap");
            clearInterval(Layout.DrawRight);
            right.css("display", "");
            Layout.onChangeEvent();
            Layout.DrawRight = setInterval(function () {
                var rightleft = right.offset().left;
                if ((rightleft) <= domWidth) {
                	$("#leftNav").css("width", domWidth + "px");
                    $("#rightMap").css({left: (rightleft + Layout.DrawRightSpeed) + "px" });
                } else {
                    $("#rightMap").css({left: domWidth + "px"});
//                    $("#rightMap").css("width", 0 + "px");
                    $("#openRightNav").css("display", "");
                    $("#closeRightNav").css("display", "none");
                    Layout.isShowRightNav = false;
                    Layout.rightLayout();
                    clearInterval(Layout.DrawRight);
                }
            }, Layout.DrawRightTimer);
        },
        ///调用全屏
        showhideFullscreen: function () {
            if (Layout.isFullScreen) {
                Layout.hideFullscreen();
            } else {
                Layout.showFullscreen();
            }
            Layout.initLayout();
            //Layout.initLayout(); //方法调用两次的原因是在防止一次加载会出现定位不准,主要是出现滚动条获取浏览器的宽度
        },
        //打开全屏
        showFullscreen: function () {
            $("#headerDiv").css("display", "none");
            $("#searchBarDiv").css("display", "none");
//            $("#toolsearch").css("display", "");
            Layout.isFullScreen = true;
            Layout.isShowLeftNav = false;
            Layout.onChangeEvent();
        },
        //关闭全屏
        hideFullscreen: function () {
            $("#headerDiv").css("display", "");
            $("#searchBarDiv").css("display", "");
//            $("#toolsearch").css("display", "none");
            Layout.isFullScreen = false;
            Layout.isShowLeftNav = true;
            Layout.onChangeEvent();
        },
        shrinkMode:function(animate){
        	Layout.isAnimate = animate;
        },
        onChangeEvent:function(){}
	};
	
	window.layout = Layout;
    //这个是在加载时间之后触发的事件 
    window.onunload = function () {
        
    };
})();

//采用jquery easyui loading css效果 
function ajaxLoading(){ 
  //  $("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(window).height()}).appendTo("body");
    $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) - 190) / 2,top:($(window).height() - 45) / 2}); 
 } 
 function ajaxLoadEnd(){ 
     $(".datagrid-mask").remove(); 
     $(".datagrid-mask-msg").remove();             
}