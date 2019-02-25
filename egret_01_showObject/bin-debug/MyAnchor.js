var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by wyq on 2019-02-25.
 */
var MyAnchor = (function (_super) {
    __extends(MyAnchor, _super);
    function MyAnchor() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyAnchor.prototype.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        this.addChild(shp);
    };
    return MyAnchor;
}(egret.DisplayObjectContainer));
__reflect(MyAnchor.prototype, "MyAnchor");
