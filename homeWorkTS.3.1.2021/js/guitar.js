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
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(numberOfStrings, model, manufacturer, color, productID) {
        var _this = _super.call(this, model, manufacturer, color, productID) || this;
        _this.numberOfStrings = numberOfStrings;
        _this.model = model;
        _this.manufacturer = manufacturer;
        _this.color = color;
        _this.productID = productID;
        _this.numberOfStrings = numberOfStrings;
        return _this;
    }
    Guitar.prototype.changeProtectedID = function () {
        this.productID = 123;
    };
    Guitar.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return Guitar;
}(Musical_instruments));
