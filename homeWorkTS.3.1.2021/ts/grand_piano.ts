class Grand_piano extends Piano {
    constructor(public length: number, public numberOfkeyboards: number, public model: string, public manufacturer: string, public color: string) {
        super(numberOfkeyboards, model, manufacturer, color)
        this.length = length
    }
    public display() {
        super.display()
        console.log(this.length)
    }
}