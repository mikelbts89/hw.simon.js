class Guitar extends Musical_instruments {

    constructor(public numberOfStrings: number
        , public model: string,
        public manufacturer: string,
        public color: string, protected productID: number
    ) {
        super(model, manufacturer, color, productID)
        this.numberOfStrings = numberOfStrings

    }

    changeProtectedID() {
        this.productID = 123
    }

    public display() {
        super.display()
    }
}