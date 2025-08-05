import { getAllPayments } from './DataFunctions.js'

// JavaScript supports several higher order funtions
// (higher order functions make use of another function)

// map
const showTidyCountryPayments = ()=>{
    let data = getAllPayments()
    const countryData = data.map(c => `<li key=${c.id} value=${c.amount}>${c.country} ${c.currency}${c.amount} ${c.date} ${c.type}</li>`)
    // const countryData = data.map((c) => {return `<li key=${c.id} value=${c.amount}>${c.country} ${c.currency}${c.amount} ${c.date} ${c.type}</li>` } )
    console.log(countryData)
}
showTidyCountryPayments()

// filter (only USA FRA or SWE)
const showFilteredPayments = (whichCountry='SWE')=>{ 
    let data = getAllPayments() // careful we are repeating code...
    // === is strict equality (same value and same type)
    // console.log(data)
    const uniqueCountries = data.filter((which=whichCountry, index) => data[index].country == whichCountry ) // .country==whichCountry);
    console.log(uniqueCountries)
}
showFilteredPayments()
