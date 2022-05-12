const  tagBody  = document.querySelector("body")
const  para  =   document.createElement("p")
const  para2 = document.createElement("p")
const  tagMain   = document.createElement("Main")
const  h2= document.createElement("h2")
const  tagUlProductList   = document.createElement("ul")
const  tagLiProductItem  = document.createElement("li")
const  tagLi2ProductItem = document.createElement("li")
const  tagLi3ProductItem  = document.createElement("li")
const  tagLi4ProductItem = document.createElement("li")
const  tagLi5ProductItem  = document.createElement("li")
const  tagLi6ProductItem = document.createElement("li")
const  tagLi7ProductItem  = document.createElement("li")
const  tagLi8ProductItem = document.createElement("li")
const  tagLi9ProductItem  = document.createElement("li")
const  tagLi10ProductItem = document.createElement("li")
const  button = document.createElement("button")
const  tagSectionProductDetails = document.createElement("section")

tagBody.appendChild(tagMain)
tagMain.appendChild(h2)
tagMain.appendChild(tagUlProductList)
tagUlProductList.appendChild(tagLiProductItem)
tagUlProductList.appendChild(tagLi2ProductItem)
tagUlProductList.appendChild(tagLi3ProductItem)
tagUlProductList.appendChild(tagLi4ProductItem)
tagUlProductList.appendChild(tagLi5ProductItem)
tagUlProductList.appendChild(tagLi6ProductItem)
tagUlProductList.appendChild(tagLi7ProductItem)
tagUlProductList.appendChild(tagLi8ProductItem)
tagUlProductList.appendChild(tagLi9ProductItem)
tagUlProductList.appendChild(tagLi10ProductItem)
tagSectionProductDetails.appendChild(para)
tagSectionProductDetails.appendChild(para2)
tagSectionProductDetails.appendChild(button)
tagMain.appendChild(tagSectionProductDetails)



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
function somaPreco() {
    for(let i = 0; i < productsCart.length; i++){ 
    soma = soma + productsCart[i].price;
   
}
return soma.toFixed(2)
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
tagLiProductItem.innerHTML = `${nome}`
tagLi2ProductItem.innerHTML = `${preco}`
tagLi3ProductItem.innerHTML = `${nome2}`
tagLi4ProductItem.innerHTML = `${preco2}`
tagLi5ProductItem.innerHTML = `${nome3}`
tagLi6ProductItem.innerHTML = `${preco3}`
tagLi7ProductItem.innerHTML = `${nome4}`
tagLi8ProductItem.innerHTML = `${preco4}`
tagLi9ProductItem.innerHTML = `${nome5}`
tagLi10ProductItem.innerHTML = `${preco5}`


button.innerHTML = "Finalizar compra"


para.innerText = "Valor total"


button.addEventListener('click', apertar);
function apertar() {
para2.textContent = somaPreco(productsCart)/2;
 }

console.log(somaPreco(productsCart))