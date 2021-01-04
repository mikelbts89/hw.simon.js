const mainDiv: HTMLElement = document.querySelector(".container")

class Perfume {
    constructor(
        public name: string,
        public company: string,
        public ml: number,
        public gender: string,
        public price: number,
        private uuid: number) {
    }
    createCard(): void {
        let productCard: string = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${this.company}</h6>
              <h6 class="card-title">${this.ml}ml</h6>
              <h6 class="card-title">For: ${this.gender}</h6>
              <h6 class="card-title">Price: ${this.price}$</h6>
              <h6 class="card-title">U get VAT back: ${this.getVat()}$</h6>
              <h6 class="card-title">Current price:${this.priseAfterSale()}$</h6>
            </div>
          </div>`
        let cardDiv = document.createElement("div")
        cardDiv.className = "perfume_div"
        cardDiv.innerHTML = productCard
        return mainDiv.append(cardDiv)
    }
    public set _uuid(value: number) {
        this.uuid = value
    }

    public get _uuid(): number {
        return this.uuid
    }

    getVat(): number {
        let vat = this.price / 100 * 17
        return vat
    }
    priseAfterSale(): number {
        let currentPrice = this.price - this.getVat()
        return currentPrice
    }
}