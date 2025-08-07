import { useReducer, useState } from "react"


const StockFormReducer = () => {
    // component logic
    const initialStock = { 'code': '', 'price': 0, 'qty': 1 }
    const formReducer = (state, data) => {
        return {
            ...state, [data.field]: data.value
        }
    }
    // we used to have state
    // now we will use the reducer hook
    const [stock, dispatch] = useReducer(formReducer, initialStock)

    const handleChange = (e) => {
        dispatch({ field: e.target.id, value: e.target.value })
    }
    //some constants to use in the web document
    const qtyMin = 0
    const qtyMax = 100

    // a stateful model for our portfolio of stocks
    const [portfolio, setPortfolio] = useState([]) // an empty array to begin with
    // build the button click handler - add this new stock to the state
    const addStockToPortfolio = () => {
        event.preventDefault()
        setPortfolio([...portfolio, stock])
    }
    // build the portfolio as a collection of list items
    // this dynamically updates: render on change
    // We should privide a UNIQUE key (provided automatically as 'index' of the array)
    const currentPortfolio = portfolio.map((s, index) => <li key={index}>{s.code} {s.price} {s.qty}</li>);

    // UI
    return (
        // CAREFUL - all components must have ONE root tag
        <section>
            <form>
                {/* in React form fields are 'controlled' */}
                {/* How I fixed it - changed ID to match stateful model */}
                <input id="code" placeholder="Stock Code"
                    value={stock.code}
                    onChange={handleChange} />
                {/* add a field for 'stockPrice' controlled by a stateful model 'stockPrice */}
                <input type="number" id='price' placeholder="Stock Price"
                    value={stock.price} min="0"
                    onChange={handleChange} />
                {/* User Experience Principles: give feedback */}
                <input type="range" id="qty"
                    value={stock.qty}
                    min={qtyMin} max={qtyMax}
                    onChange={handleChange} /><span>{stock.qty}</span>
                {/* Also added a listener for the button */}
                <button onClick={addStockToPortfolio}>Go</button>            </form>
            <aside>
                {/* we can monitor any stateful values */}
                <p>Stock Code: {stock.code} Price:{stock.price}
                    Quantity {stock.qty}</p>
                <hr />
                {/* here we show the current collection of stocks we bought (local state) */}
                <h3>Portfolio</h3>
                <ul id='currentPortfolio'>
                    {currentPortfolio}
                </ul>
            </aside>
        </section>
    )
}


export default StockFormReducer