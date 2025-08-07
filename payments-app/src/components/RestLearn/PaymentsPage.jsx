// all components are pure functions
// we can absolutely predict the outcome for given inputs
// When something happens that breaks the purity of our function
// it is called a side-effect

import { useEffect, useState } from "react"
import { getAllPaymentsFetchVersion } from "../../data/DataFunctions"

// e.g user interaction, remote data, random, date/time, radioactive decay
const PaymentsPage = () => {
    // some stateful models data we will need
    const [payments, setPayments] = useState([]) // start with an empty array
    const [loading, setLoading] = useState(true)

    // component logic
    const message = loading ? `Loading Data, please wait` : `Data has loaded`

    // here is a function to go an load the remote data
    const loadData = () => {
        getAllPaymentsFetchVersion()
            .then(response => {
                response.json()
                    .then(data => {
                        setPayments(data);
                        setLoading(false);
                        console.log(data)
                    })
            }
            );
    }

    // loading external data is a side effect
    // using [] means ese the effet once, on page load (and page refresh)
    useEffect(() => { loadData() }, []) // [] represents any state that should thrigger the effect

    // component UI
    return ( // remember this is JSX - JavaScript that looks like HTML
        // these little fragments do NOT get rendered in the page
        <>
            <section>
                <h3>Payments (accessed from REST API)</h3>
                {/* UX principle - feedback */}
                <aside>{message}</aside>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th><th>Amount</th><th>Country</th><th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* an indexed iterable collection of table rows */}
                    </tbody>
                </table>
            </section>
        </>
    )

}

export default PaymentsPage