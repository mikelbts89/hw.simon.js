var mainDiv = document.querySelector(".container");
var Perfume = /** @class */ (function () {
    function Perfume(name, company, ml, gender, price, uuid) {
        this.name = name;
        this.company = company;
        this.ml = ml;
        this.gender = gender;
        this.price = price;
        this.uuid = uuid;
    }
    Perfume.prototype.createCard = function () {
        var productCard = "<div class=\"card\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">" + this.company + "</h6>\n              <h6 class=\"card-title\">" + this.ml + "ml</h6>\n              <h6 class=\"card-title\">For: " + this.gender + "</h6>\n              <h6 class=\"card-title\">Price: " + this.price + "$</h6>\n              <h6 class=\"card-title\">U get VAT back: " + this.getVat() + "$</h6>\n              <h6 class=\"card-title\">Current price:" + this.priseAfterSale() + "$</h6>\n            </div>\n          </div>";
        var cardDiv = document.createElement("div");
        cardDiv.className = "perfume_div";
        cardDiv.innerHTML = productCard;
        return mainDiv.append(cardDiv);
    };
    Object.defineProperty(Perfume.prototype, "_uuid", {
        get: function () {
            return this.uuid;
        },
        set: function (value) {
            this.uuid = value;
        },
        enumerable: true,
        configurable: true
    });
    Perfume.prototype.getVat = function () {
        var vat = this.price / 100 * 17;
        return vat;
    };
    Perfume.prototype.priseAfterSale = function () {
        var currentPrice = this.price - this.getVat();
        return currentPrice;
    };
    return Perfume;
}());
