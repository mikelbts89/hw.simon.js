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
var A = /** @class */ (function () {
    function A() {
        this.x = 2;
        this._y = 3;
        this.z = 4;
        this.f = 5;
    }
    A.prototype.changeProtected = function () {
        this.z = 123;
    };
    A.prototype.setY = function (val) {
        this._y = val;
    };
    A.prototype.getY = function () {
        return this._y;
    };
    return A;
}());
var b = new A();
console.log("🚀 ~ file: app.ts ~ line 42 ~ b", b);
console.log(b.f, b.x);
b.x = 12;
b.changeProtected();
console.log("🚀 ~ file: app.ts ~ line 50 ~ b", b);
b.setY(213);
console.log("🚀 ~ file: app.ts ~ line 57 ~ b", b);
b.getY();
console.log("🚀 ~ file: app.ts ~ line 62 ~ b.getY()", b.getY());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.asd = 123;
        return _this;
    }
    return B;
}(A));
var basd = new B;
console.log("🚀 ~ file: app.ts ~ line 70 ~ basd", basd);
basd.changeProtected();
console.log("🚀 ~ file: app.ts ~ line 73 ~ basd", basd);
var AC = /** @class */ (function () {
    function AC(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    AC.prototype.dislay = function () {
        console.log("A = " + this.a + " B = " + this.b + " C = " + this.c + " ");
    };
    return AC;
}());
var BC = /** @class */ (function (_super) {
    __extends(BC, _super);
    function BC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BC.prototype.getNewNumber = function () {
        return 30;
    };
    return BC;
}(AC));
var bcd = new BC(1, 2, 3);
console.log("🚀 ~ file: test.ts ~ line 67 ~ bcd", bcd);
console.log(bcd.getNewNumber());
bcd.dislay();
