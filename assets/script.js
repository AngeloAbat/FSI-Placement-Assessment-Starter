let yourName = ": Angelo Abat"

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar

let quantityGB = document.getElementById("qty-gb")
let quantityCC = document.getElementById("qty-cc")
let quantitySugar = document.getElementById("qty-sugar")
let quantityTotal = document.getElementById("qty-total")


const credit = document.querySelector('#credit')


// GingerBread
const gbPlus = document.querySelector('#add-gb')
gbPlus.addEventListener("click", function(){
    gb = gb + 1
    total = gb + cc + sugar
    console.log(gb)

    quantityGB.textContent = gb
    quantityTotal.textContent = total
})

const gbMinus = document.querySelector("#minus-gb")
gbMinus.addEventListener("click", function(){
    gb = gb - 1
    total = gb + cc + sugar
    if (total <= -1){
        total = 0
    }
    if (gb < 0){
        gb = 0
    }
    quantityGB.textContent = gb
    quantityTotal.textContent = total


})

// Chocolate Chip
const ccPlus = document.querySelector("#add-cc")
ccPlus.addEventListener("click", function(){
    cc = cc + 1
    total = gb + cc + sugar
    quantityCC.textContent = cc
    quantityTotal.textContent = total
})
const ccMinus = document.querySelector("#minus-cc")
ccMinus.addEventListener("click", function(){
    cc = cc - 1
    total = gb + cc + sugar
    if (total <= -1){
        total = 0
    }
    if(cc < 0){
       cc  = 0
    }
    quantityCC.textContent = cc
    quantityTotal.textContent = total
})

// Sugar Sprinkle
const sugarPlus = document.querySelector("#add-sugar")
sugarPlus.addEventListener("click", function(){
    sugar = sugar + 1
    total = gb + cc + sugar
    quantitySugar.textContent = sugar
    quantityTotal.textContent = total
})

const sugarMinus = document.querySelector("#minus-sugar")
sugarMinus.addEventListener("click", function(){
    sugar = sugar - 1
    total = gb + cc + sugar
    if (total <= -1){
        total = 0
    }
    if(sugar < 0){
        sugar = 0
    }
    quantitySugar.textContent = sugar
    quantityTotal.textContent = total
})




credit.textContent = `Created by ${yourName}`

