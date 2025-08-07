import { useState } from "react"

const StockForm = ()=>{
    // component logic
    const qtyMin = 1
    const qtyMax = 100
    // whenever you see 'use' that is a React hook
    const [stockCode, setStockCode] = useState()
    // state for stockPrice
    const [stockPrice, setStockPrice] = useState()
    // state for quantity with an initial state of 1
    const [stockQty, setStockQty] = useState(1)

    // handlers
    const changeStockcode = (e)=>{
        // grab whatever is currently in the form field
        const code = e.target.value
        // use the state to set this new value in our stockCode
        setStockCode(code)
    }
    // function for stockPrice
    const changeStockPrice = (e)=>{
        const price =e.target.value
        setStockPrice(price)
    }
    const handleQuantity = (e)=>{
        const qty = e.target.value
        setStockQty(qty)
    }
    // component content (what the user sees)
    return (
        // CAREFUL - all components must have ONE root tag
        <section>
            <form>
                {/* in React form fields are 'controlled' */}
                <input id="newStockCode" placeholder="Stock Code"
                    onChange={changeStockcode} />
                {/* add a field for 'stockPrice' controlled by a stateful model 'stockPrice */}
                <input type="number" id='newStockPrice' placeholder="Stock Price" 
                    min="0" onChange={changeStockPrice}/>
                {/* User Experience Principles: give feedback */}
                <input type="range" id="newStockQuantity" value={stockQty}
                    min={qtyMin} max={qtyMax} onChange={handleQuantity} /><span>{stockQty}</span>
                <button>Go </button>
            </form>
            <aside>
                {/* we can monitor any stateful values */}
                <p>Stock Code: {stockCode} Price:{stockPrice} Quantity {stockQty}</p>
            </aside>
        </section>
    )
}
export default StockForm