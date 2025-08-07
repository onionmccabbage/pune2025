import { useState } from "react"

const StockForm = ()=>{
    // component logic
    // whenever you see 'use' that is a React hook
    const [stockCode, setStockCode] = useState()
    // state for stockPrice
    const [stockPrice, setStockPrice] = useState()

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

    // component content (what the user sees)
    return (
        // CAREFUL - all components must have ONE root tag
        <section>
            <form>
                {/* in React form fields are 'controlled' */}
                <input id="newStockCode" placeholder="Stock Code"
                    onChange={changeStockcode} />
                {/* add a field for 'stockPrice' controlled by a stateful model 'stockPrice */}
                <input id='newStockPrice' placeholder="Stock Price" 
                    onChange={changeStockPrice}/>
                <button>
                    Go
                </button>
            </form>
            <aside>
                {/* we can monitor any stateful values */}
                <p>Stock Code: {stockCode} Price:{stockPrice}</p>
            </aside>
        </section>
    )
}
export default StockForm