
const  tagMain   = document.createElement("Main")
const  tagBody  = document.createElement("Body")
const  tagUl   = document.createElement("ul")
const  tagLi  = document.createElement("li")
const  button = document.createElement("button")
const tagSection = document.createElement("section")

tagMain.appendChild(tagBody)
tagUl.appendChild(tagBody)
tagLi.appendChild(tagUl)
button.appendChild(tagSection)


const productsCart = [
    {
        id: 0,
        name: "Água Mineral",
        price: 2.00
    },
    {
        id: 1,
        name: "Coca Cola",
        price: 5.50
    },
    {
        id: 2,
        name: "Guaraná",
        price: 3.50
    },
    {
        id: 3,
        name: "Vodka",
        price: 25.00
    },
    {
        id: 4,
        name: "Cerveja",
        price: 7.85
    },
    {
        id: 5,
        name: "Wisky",
        price: 105.00
    },

]

let soma = 0
function somaPreco(price) {
    for(let i = 0; i < productsCart.length; i++){ 
    soma = soma + productsCart[i].price;
   
}
return soma
}

console.log(tagMain)
