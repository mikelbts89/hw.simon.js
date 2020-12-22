var mainDiv = document.querySelector(".container");
var Perfume = /** @class */ (function () {
    function Perfume(name, company, ml, gender, price) {
        this.name = name;
        this.company = company;
        this.ml = ml;
        this.gender = gender;
        this.price = price;
    }
    Perfume.prototype.createCard = function () {
        var productCard = "<div class=\"card\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">" + this.company + "</h6>\n              <h6 class=\"card-title\">" + this.ml + "ml</h6>\n              <h6 class=\"card-title\">for: " + this.gender + "</h6>\n              <h6 class=\"card-title\">" + this.price + "$</h6>\n            </div>\n          </div>";
        return mainDiv.innerHTML = productCard;
    };
    Perfume.prototype.getVat = function () {
        var vat = this.price / 100 * 17;
        return vat;
    };
    return Perfume;
}());
var cocoChanel = new Perfume("Coco Chanel", "Chanel", 70, "Female", 500);
cocoChanel.createCard();
console.log("🚀 ~ file: app.ts ~ line 37 ~ cocoChanel.getVat()", cocoChanel.getVat());
