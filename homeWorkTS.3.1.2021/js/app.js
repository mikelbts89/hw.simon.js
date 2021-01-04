var electricGiutar = new Guitar(6, "Classic", "AC/DC", "Wood", 9283745);
// electricGiutar.display()
var goldPiano = new Piano(88, "Classic", "Vogel", "Black", 31425364);
// goldPiano.display()
var blackPiano = new Grand_piano(2.3, 88, "Classic", "Bergman", "Black", 12335131);
// blackPiano.display()
var tarbukaDrum = new Drum(45, "Classic", "Brazil & Drum", "Broun", 12341324);
// tarbukaDrum.display()
var musicalInstrumentsArr = [electricGiutar, goldPiano, blackPiano, tarbukaDrum];
musicalInstrumentsArr.map(function (key) {
    key.display();
    if (key instanceof Guitar) {
        console.log(key.numberOfStrings);
    }
    if (key instanceof Piano) {
        console.log(key.numberOfkeyboards);
    }
    if (key instanceof Drum) {
        console.log(key.diameter);
    }
    if (key instanceof Grand_piano) {
        console.log(key.length);
    }
});
electricGiutar.changeProtectedID();
console.log("🚀 ~ file: app.ts ~ line 29 ~ electricGiutar", electricGiutar);
