// access data from an API end-point
// we will use promise where we must wait for the data

// we use async/await to let our codee handle time-dependant outcomes (promises)

const getAllAPIPayments = async () => {
    const url = "https://payments.neueda.com/api/payment"
    // by default fetch will use 'GET'
    // We may coose to specify the HTTP verb GET, POST, PUT, UPDATE, PATCH
    try {
        const response = await fetch(url, { 
            method: 'GET', 
            headers: new Headers(
            { 'Accept': 'application/json' }) 
            }
        )
        // check to see if the response is ok
        if (!response.ok){
            throw new Error(`Something went wrong ${response.status}`)
        }
        // if we get this far we know the response is ok
        console.log(response)
        return response
    }
    catch (err) {
        console.error(err.message)
    }
}
//export this function as the default for this module
export default getAllAPIPayments


// remember to call the function (for exercising the code within this module - NOT for export)
getAllAPIPayments()