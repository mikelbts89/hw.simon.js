class Piano extends Musical_instruments {
    constructor(public numberOfkeyboards: number, public model: string, public manufacturer: string, public color: string) {
        super(model, manufacturer, color)
        this.numberOfkeyboards = numberOfkeyboards
    }
    public display() {
        super.display()
        console.log(this.numberOfkeyboards)
    }
}