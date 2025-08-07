const PaymentsPage = () => {

    // component logic
    const message = `Loading Data, please wait`


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