// intitial functionality

// modular
// easier to manage, catch problems
// impprove readability
// divide work across several people
// easier to debug
// re-usable 
// scalable
// testable - unit testing

// and yet... we tend to combine them all up again into one efficient single deliverable

// write the line to import the function from DataFunctions.js
import { getAllPayments } from "./DataFunctions.js"
import getAllAPIPayments from "./paymentAPIaccess.js"

// export default function app(){
const app=()=>{
    console.log(`App is running`)
    // we will need to acces some remote data
    // mock data is similar to the logic of real data. But it is fake
    // test functionality
    // do not affect the real data
    // maybe the real data is not ready yet!!!!
    const useMockData = ()=>{
        const data = getAllPayments() // load up our mock data array of objects
        console.log(data)
        // first, get hold of the relevant part of the web document
        let c = document.getElementById('output')
        // then construct a nice piece of content
        let data_j = JSON.stringify(data)
        // if we need to converts JSON text into a JS structure
        let o = JSON.parse(data_j)
        // JSON is JavaScript Object Notation. NB JSON is NOT JavaScript
        // JSON is always just plain text
        // JSON is a collection of key:value pairs

        // inject our new content into the web document
        c.innerHTML = data_j // put the text inmto the document
    }
    // invoke the function
    useMockData()
    // here we will use the API call function to get live data
    const waitForLiveData = ()=>{
        // call the imported function
        getAllAPIPayments() // it will return a response object (as a promise)
            // we resolve the promise
            .then( (response)=>{
                return response.json()
            } ) // we may chain .then functions
            .then( (data)=>{
                console.log(data)
                // we can put the received data imto the web document
                let c = document.getElementById('output')
                c.innerHTML = JSON.stringify(data) 
            } )
    }
    // invoke our function to get the remote data
    waitForLiveData()



}
// we may choose to export as a default
export default app






