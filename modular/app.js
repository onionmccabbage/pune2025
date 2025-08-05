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
import { getAllPayments } from "./DataFunctions"

export const app = ()=>{
    console.log(`App is running`)
    // we will need to acces some remote data
    // mock data is similar to the logic of real data. But it is fake
    // test functionality
    // do not affect the real data
    // maybe the real data is not ready yet!!!!
    const ueMockData = ()=>{
        const data = getAllPayments() // load up our mock data array of objects
        console.log(data)
    }



}






