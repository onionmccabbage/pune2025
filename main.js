// Javascript can control web document content
const item = 'Penguin'
let price = 309
const currencySymbol = `INR`
// perhaps the price changes
price = 903

const showShopping=()=>{
    // we may select an HTML element by it's ID
    let r = document.getElementById('shopping')
    r.innerHTML = `We bought a ${item} costing ${currencySymbol}${price}`
}
// invoke the function
showShopping()

// a function call-back to handle the button click event
// in JS event objects are ALWAYS passed (even if we didn't ask for it)
const handleButton = ()=>{
    // prevent the form from refreshing the page!!!!!!!
    event.preventDefault()
    console.log(`${event.target}`)
    // grab the form field
    let stock = document.getElementById('stockCode')
    let stockCodeChoice = stock.value // value is the current value in the form field
    let shop = document.getElementById('shopping')
    // we can build a little piece of HTML
    let c = document.createElement('p')
    c.append(stockCodeChoice) // append the litteral content
    shop.appendChild(c) // append as HTML content
}
