var mainDiv1 = document.querySelector(".products1");
var Product = /** @class */ (function () {
    function Product(name, stock, id, category) {
        this.name = name;
        this.stock = stock;
        this.id = id;
        this.category = category;
    }
    Product.prototype.sendOrder = function () {
        console.log("send item : ", this.stock, this.id, this.category);
    };
    Product.prototype.getId = function () {
        console.log("Product ID : ", this.id);
    };
    Product.prototype.initProduct = function () {
        var productCard = "<div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + this.name + "</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Category: " + this.category + "</h6>\n      <h6 class=\"card-title\">ID: " + this.id + "ml</h6>";
        var cardDiv1 = document.createElement("div");
        cardDiv1.className = "product_div";
        cardDiv1.innerHTML = productCard;
        return mainDiv1.append(cardDiv1);
    };
    return Product;
}());
