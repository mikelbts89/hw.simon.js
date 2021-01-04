class Grand_piano extends Piano {
    constructor(public length: number, public readonly numberOfkeyboards: number, public model: string, public manufacturer: string, public color: string, protected productID: number) {
        super(numberOfkeyboards, model, manufacturer, color, productID)
        this.length = length
    }
    public display() {
        super.display()
    }
}