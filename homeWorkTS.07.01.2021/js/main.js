var ElectronicDevice = /** @class */ (function () {
    function ElectronicDevice(manu, model) {
        this.manufacturer = manu;
        this.model = model;
    }
    ElectronicDevice.prototype.init = function () {
        console.log("Manufactuter : ", this.manufacturer);
        console.log("Model : ", this.model);
    };
    ElectronicDevice.prototype.play = function () {
        console.log("Playing...");
    };
    ElectronicDevice.prototype.pouse = function () {
        console.log("Pouse");
    };
    ElectronicDevice.prototype.stop = function () {
        console.log("Stop");
    };
    return ElectronicDevice;
}());
var iphone = new ElectronicDevice("Apple", "Xs Max");
iphone.init();
iphone.play();
iphone.pouse();
iphone.stop();
