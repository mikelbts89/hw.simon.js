const mainDiv:HTMLElement = document.querySelector(".container")
    
    class Perfume {
        name:string
        company:string
        ml:number
        gender:string
        price:number
        constructor(name,company,ml,gender,price){
            this.name = name
            this.company = company
            this.ml = ml
            this.gender = gender
            this.price = price
        }
        createCard(){
            let productCard:string = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${this.company}</h6>
              <h6 class="card-title">${this.ml}ml</h6>
              <h6 class="card-title">for: ${this.gender}</h6>
              <h6 class="card-title">${this.price}$</h6>
            </div>
          </div>`
         return mainDiv.innerHTML = productCard
        }
        getVat(){
            let vat = this.price/100*17
            return  vat
        }
    }

    let cocoChanel = new Perfume("Coco Chanel","Chanel",70,"Female",500)
    cocoChanel.createCard()
    console.log("🚀 ~ file: app.ts ~ line 37 ~ cocoChanel.getVat()", cocoChanel.getVat())
    