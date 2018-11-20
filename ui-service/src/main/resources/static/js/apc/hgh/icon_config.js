//
//var Icon_Type="image";//icon,image
//var Icon_FontType="icon_n";//icon_n:无背景图标字体，icon_r:有背景的图标字体,image：普通图片
//var Lable_Position="top";
/**
 * 定义颜色、位置、偏移量
 * @type {{Vehicle: {online: string, offline: string}, Person: {online: string, offline: string}, Flight: {arrived: string, depart: string}, Warning: {type_in: string, type_out: string, type_over: string, type_di: string}, History: {defalut: string}}}
 */
var Icon_Style={
    Vehicle:{
        online:Icon_Color_Online,
        offline:Icon_Color_Offline
    },
    Person:{
        online:Icon_Color_Online,
        offline:Icon_Color_Offline
    },
    Flight:{
        arrived:"rgb(0,178,220)",
        depart:"rgb(255,88,0)"
    },
    Warning:{
        type_over:"rgb(0,106,254)",//超速报警
        type_in:"rgb(255,168,0)",//禁止区报警
        type_out:"rgb(255,0,0)",//禁出区报警
        type_gate:"rgb(255,69,0)",//国内国际报警
        type_place:"rgb(184,134,11)"
    },
    History:{
        vehicle:"rgb(88,138,58)",
        person:"rgb(0,167,72)"
    }
};

var Icon_Postion={
    Postion_selectd:Lable_Position,
    Icon_Selectd:Icon_FontType,
    icon_n_top:{
        offSet:[0,-15]
    },
    icon_n_bottom:{
        offSet:[0,15]
    },
    icon_r_top:{
        offSet:[0,-25]
    },
    icon_r_bottom:{
        offSet:[0,25]
    }
};