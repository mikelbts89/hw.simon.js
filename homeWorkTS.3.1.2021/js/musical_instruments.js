var Musical_instruments = /** @class */ (function () {
    function Musical_instruments(model, manufacturer, color) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
    }
    Musical_instruments.prototype.display = function () {
        console.log(this.model, this.manufacturer, this.color);
    };
    return Musical_instruments;
}());
