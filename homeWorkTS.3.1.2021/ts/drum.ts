class Drum extends Musical_instruments {
    constructor(public diameter: number, public model: string, public manufacturer: string, public color: string, protected productID: number) {
        super(model, manufacturer, color, productID)
        this.diameter = diameter
    }
    public display() {
        super.display()
    }
}