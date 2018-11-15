ol.Object.prototype.hasKey = function (key) {
    var val = this.get(key);
    if (val)
        return true;
    else
        return false;
};

/**
 * 判断地图中是否已经存在层
 * @author Administrator
 *
 */
ol.Map.prototype.hasLayer = function (title) {
    var check = false;
    var collections = this.getLayers();
    var array = collections.getArray();
    for (var i in array) {
        var item = array[i];
        if (item.hasKey('title'))
            var layer_title = item.get('title');
        if (layer_title == title) {
            check = true;
            break;
        }
    }
    return check;
};
/**
 * Created by Administrator on 2015/7/13.
 */
ol.Collection.prototype.updateItem=function(item,key,changetype){
    if(changetype=='delete'){
        var this_=this;
        this.forEach(function(e,i,a){
            if(e[key]==item[key]){
                this_.remove(e);
                return false;
            }
        })
    }
    else if(changetype=='update'){
        var hasItem = false;
        this.forEach(function(e,i,a){
            if(e[key]==item[key]){
                a[i]=item;
                hasItem=true;
                return false;
            }
            return hasItem;
        });
        if(!hasItem){
            this.push(item);
        }
    }
};