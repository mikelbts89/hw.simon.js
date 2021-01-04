
class A {
    public x: number = 2
    private _y: number = 3
    protected z: number = 4
    public readonly f: number = 5

    changeProtected() {
        this.z = 123
    }

    public setY(val: number): void {
        this._y = val
    }

    public getY(): number {
        return this._y
    }

}

let b = new A()
console.log("🚀 ~ file: app.ts ~ line 42 ~ b", b)
console.log(b.f, b.x)
b.x = 12
b.changeProtected()
console.log("🚀 ~ file: app.ts ~ line 50 ~ b", b)
b.setY(213)
console.log("🚀 ~ file: app.ts ~ line 57 ~ b", b)
b.getY()
console.log("🚀 ~ file: app.ts ~ line 62 ~ b.getY()", b.getY())


class B extends A {
    public asd: number = 123
}

let basd = new B
console.log("🚀 ~ file: app.ts ~ line 70 ~ basd", basd)

basd.changeProtected()
console.log("🚀 ~ file: app.ts ~ line 73 ~ basd", basd)


abstract class AC {
    public a: number
    public b: number
    public c: number
    constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = b
        this.c = c
    }
    public dislay() {
        console.log(`A = ${this.a} B = ${this.b} C = ${this.c} `)
    }
    abstract getNewNumber(): number
}

class BC extends AC {
    public getNewNumber(): number {
        return 30
    }

}

let bcd = new BC(1, 2, 3)
console.log("🚀 ~ file: test.ts ~ line 67 ~ bcd", bcd)
console.log(bcd.getNewNumber())
bcd.dislay()

interface Iclass {
    numbers: number
    strings: string
    test: boolean
    display(): void
}

class Nama implements Iclass {
    numbers = 12
    strings = "str"
    test = true
    display() {
        console.log(this.numbers)
    }
}

let namaNew = new Nama()
console.log("🚀 ~ file: test.ts ~ line 89 ~ namaNew", namaNew)
namaNew.display()