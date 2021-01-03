class Drum extends Musical_instruments {
    constructor(public diameter: number, public model: string, public manufacturer: string, public color: string) {
        super(model, manufacturer, color)
        this.diameter = diameter
    }
    public display() {
        super.display()
        console.log(this.diameter)
    }
}