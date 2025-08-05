// access data from an API end-point
// we will use promise where we must wait for the data

const getAllAPIPayments = () => {
    const url = "https://payments.neueda.com/api/payment"
    // by default fecth will use 'GET'
    // We may coose ot specify the HTTP verb GET, POST, PUT, UPDATE, PATCH
    const response = fetch(url, { 
            method: 'GET', 
            headers: new Headers(
            { 'Accept': 'application/json' }) 
            }
        )
}