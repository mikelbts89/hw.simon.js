interface IPlayable {
    play()
    pouse()
    stop()
}

class ElectronicDevice implements IPlayable {
    public manufacturer: string
    protected model: string

    constructor(manu: string, model: string) {
        this.manufacturer = manu
        this.model = model
    }
    public init() {
        console.log("Manufactuter : ", this.manufacturer)
        console.log("Model : ", this.model)
    }

    public play() {
        console.log("Playing...")
    }
    public pouse() {
        console.log("Pouse")
    }
    public stop() {
        console.log("Stop")
    }
}

let iphone = new ElectronicDevice("Apple", "Xs Max")
iphone.init()
iphone.play()
iphone.pouse()
iphone.stop()