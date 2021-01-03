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
var Grand_piano = /** @class */ (function (_super) {
    __extends(Grand_piano, _super);
    function Grand_piano(length, numberOfkeyboards, model, manufacturer, color) {
        var _this = _super.call(this, numberOfkeyboards, model, manufacturer, color) || this;
        _this.length = length;
        _this.numberOfkeyboards = numberOfkeyboards;
        _this.model = model;
        _this.manufacturer = manufacturer;
        _this.color = color;
        _this.length = length;
        return _this;
    }
    Grand_piano.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.length);
    };
    return Grand_piano;
}(Piano));
