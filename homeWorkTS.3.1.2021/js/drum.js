var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Drum = /** @class */ (function (_super) {
    __extends(Drum, _super);
    function Drum(diameter, model, manufacturer, color, productID) {
        var _this = _super.call(this, model, manufacturer, color, productID) || this;
        _this.diameter = diameter;
        _this.model = model;
        _this.manufacturer = manufacturer;
        _this.color = color;
        _this.productID = productID;
        _this.diameter = diameter;
        return _this;
    }
    Drum.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return Drum;
}(Musical_instruments));
