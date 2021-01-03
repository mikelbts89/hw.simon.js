class Musical_instruments {
    constructor(public model: string, public manufacturer: string, public color: string) {
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
    }
    public display() {
        console.log(this.model, this.manufacturer, this.color)
    }
}