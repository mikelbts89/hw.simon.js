var Musical_instruments = /** @class */ (function () {
    function Musical_instruments(model, manufacturer, color, productID) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.productID = productID;
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.productID = productID;
    }
    Musical_instruments.prototype.display = function () {
        console.log(this.model, this.manufacturer, this.color, this.productID);
    };
    return Musical_instruments;
}());
