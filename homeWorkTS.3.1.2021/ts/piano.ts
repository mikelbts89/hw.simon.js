class Piano extends Musical_instruments {
    constructor(public readonly numberOfkeyboards: number, public model: string, public manufacturer: string, public color: string, protected productID: number) {
        super(model, manufacturer, color, productID)
        this.numberOfkeyboards = numberOfkeyboards
    }
    public display() {
        super.display()
    }
}