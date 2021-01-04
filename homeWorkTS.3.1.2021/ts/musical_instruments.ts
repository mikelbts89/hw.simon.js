class Musical_instruments {
    constructor(public model: string, public manufacturer: string, public color: string, protected productID: number) {
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
        this.productID = productID
    }
    public display() {
        console.log(this.model, this.manufacturer, this.color , this.productID)
    }
}