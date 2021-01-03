class Guitar extends Musical_instruments {
    constructor(public numberOfStrings: number, public model: string, public manufacturer: string, public color: string) {
        super(model, manufacturer, color)
        this.numberOfStrings = numberOfStrings
    }
    public display() {
        super.display()
        console.log(this.numberOfStrings)
    }
}