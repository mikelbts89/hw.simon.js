const mainDiv1: HTMLElement = document.querySelector(".products1")


class Product {
    constructor(public name: string, public stock: boolean, public id: string, public category: string) {
    }

    sendOrder(): void {
        console.log("send item : ", this.stock, this.id, this.category)
    }

    getId(): void {
        console.log("Product ID : ", this.id)
    }
    initProduct(): void {
        let productCard: string = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Category: ${this.category}</h6>
      <h6 class="card-title">ID: ${this.id}ml</h6>`
        let cardDiv1 = document.createElement("div")
        cardDiv1.className = "product_div"
        cardDiv1.innerHTML = productCard
        return mainDiv1.append(cardDiv1)

    }


}

