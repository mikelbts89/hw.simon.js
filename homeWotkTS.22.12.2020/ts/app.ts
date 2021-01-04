
let cocoChanel = new Perfume("Coco Chanel", "Chanel", 70, "Lady", 500, 123)
cocoChanel.createCard()
console.log("🚀 ~ file: app.ts ~ line 4 ~ cocoChanel.getVat()", cocoChanel.getVat())
console.log("🚀 ~ file: app.ts ~ line 5 ~ cocoChanel._uuid", cocoChanel._uuid)
cocoChanel._uuid = 111
console.log("🚀 ~ file: app.ts ~ line 7 ~ cocoChanel._uuid", cocoChanel._uuid)

let armaniCode = new Perfume("Armani Code", "Armani", 70, "Man", 340, 321)
armaniCode.createCard()

let chanelNo5 = new Perfume("Chanel No 5", "Chanel", 70, "Lady", 700, 231)
chanelNo5.createCard()

const macBook = new Product("MacBook", true, "1We4572", "Computer",)
macBook.sendOrder()
macBook.getId()
macBook.initProduct()

const dellLaptop = new Product("Dell", true, "12QXP43T", "Laptop")
dellLaptop.sendOrder()
dellLaptop.getId()
dellLaptop.initProduct()

const lenovoComp = new Product("Lenovo", true, "96WV5M4", "Computer")
lenovoComp.initProduct()

const ak47 = new Product("AK47", true, "6514864", "Automatic firearm")
ak47.initProduct()