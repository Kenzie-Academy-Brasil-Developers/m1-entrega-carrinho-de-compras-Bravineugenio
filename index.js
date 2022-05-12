const  tagBody  = document.querySelector("body")
const   para  =   document.createElement("p")
const para2 = document.createElement("p")
const  tagMain   = document.createElement("Main")
const h2= document.createElement("h2")
const  tagUl   = document.createElement("ul")
const  tagLi  = document.createElement("li")
const tagLi2 = document.createElement("li")
const  tagLi3  = document.createElement("li")
const tagLi4 = document.createElement("li")
const  tagLi5  = document.createElement("li")
const tagLi6 = document.createElement("li")
const  tagLi7  = document.createElement("li")
const tagLi8 = document.createElement("li")
const  tagLi9  = document.createElement("li")
const tagLi10 = document.createElement("li")
const  button = document.createElement("button")
const tagSection = document.createElement("section")



tagBody.appendChild(tagMain)
tagMain.appendChild(h2)
tagMain.appendChild(tagUl)
tagUl.appendChild(tagLi)
tagUl.appendChild(tagLi2)
tagUl.appendChild(tagLi3)
tagUl.appendChild(tagLi4)
tagUl.appendChild(tagLi5)
tagUl.appendChild(tagLi6)
tagUl.appendChild(tagLi7)
tagUl.appendChild(tagLi8)
tagUl.appendChild(tagLi9)
tagUl.appendChild(tagLi10)
tagSection.appendChild(para)
tagSection.appendChild(para2)
tagSection.appendChild(button)
tagMain.appendChild(tagSection)



function shopping(carrinho){
    for(let i=0;i<carrinho.length;i++){
        const venda = carrinho[i]
        const produto = carrinho(venda)
        carrinho.appendChild(produto)
    }
}

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

]

let soma = 0
function somaPreco(price) {
    for(let i = 0; i < productsCart.length; i++){ 
    soma = soma + productsCart[i].price;
   
}
return soma
}
let nome = productsCart[0].name
let preco = productsCart[0].price
let nome2 = productsCart[1].name
let preco2 = productsCart[1].price
let nome3 = productsCart[2].name
let preco3 = productsCart[2].price
let nome4 = productsCart[3].name
let preco4 = productsCart[3].price
let nome5 = productsCart[4].name
let preco5 = productsCart[4].price


h2.innerHTML = "Depósito de Bebidas"
tagLi.innerHTML = `${nome}`
tagLi2.innerHTML = `${preco}`
tagLi3.innerHTML = `${nome2}`
tagLi4.innerHTML = `${preco2}`
tagLi5.innerHTML = `${nome3}`
tagLi6.innerHTML = `${preco3}`
tagLi7.innerHTML = `${nome4}`
tagLi8.innerHTML = `${preco4}`
tagLi9.innerHTML = `${nome5}`
tagLi10.innerHTML = `${preco5}`


button.innerHTML = "Finalizar compra"


para.innerText = "Valor total"

 button.addEventListener('click', apertar);

 function apertar() {
   //button.value == somaPreco(productsCart)
     para2.textContent = somaPreco(productsCart)/2;
 }

console.log(somaPreco(productsCart))