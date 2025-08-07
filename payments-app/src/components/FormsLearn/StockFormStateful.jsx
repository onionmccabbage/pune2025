import { useState } from "react";

const StockForm = () => {
    // build a single state for all the data members
    // there is advantage to using a minimum number of stateful models e.g. ONE
    const [stock, setStock] = useState({'code':'', 'price':'', 'qty':1}) // an object to start with
    
    const changeStock = (e)=>{
        const v = e.target.value
        const f = e.target.id
        // setStock(...stock, code=code, price=price, qty=qty)
        if (f=='newStockCode'){
            setStock({...stock, 'stock':v})
        } else if (f=='newStockPrice'){
            setStock({...stock, 'price':v})
        } else if (f=='newStockQuantity'){
            setStock({...stock, 'qty':v})
        }
    }

    // build the button click handler - add this new stock to the state
    const [portfolio, setPortfolio] = useState([]) // an empty array to begin with
    const addStockToPortfolio = () => {
        // originally looked like this
        // const newPurchase = { 'stock': stockCode, 'price': stockPrice, 'qty':stockQty }
        // now simply...
        const newPurchase = stock
        setPortfolio([...portfolio, newPurchase])
        console.log(portfolio)
    }
    // build the portfolio as a collection of list items
    // but how does this dynamically update (as it does)
    // render on change
    // We should privide a UNIQUE key (provided automatically as 'index' of the array)
    const currentPortfolio = portfolio.map((s, index) => <li key={index}>{s.stock} {s.price} {s.qty}</li>);

    //some constants to use in the web document
    const qtyMin = 0
    const qtyMax = 100
 
    return (
        <section>
            {/* notice we do not need a form tag */}
            {/* <form> we would need an onSubmit handler to prevent default */}
            {/* UPDATED field event handlers */}
            
                <input id="newStockCode" placeholder="Stock Code" onChange={changeStock} /><br />
                <input id="newStockPrice" type="number" min='0' placeholder="price"
                    onChange={changeStock} /><br/>
                {/* a controlled component */}
                <input id='newStockQuantity' type="range" min={qtyMin} max={qtyMax}
                    // UPDATED value
                    value={stock.qty} onChange={changeStock} />
                {/* UPDATED show the value of the range */}
                <span>{stock.qty}</span> 
                <button onClick={addStockToPortfolio}>Go</button>
            {/* </form> */}
            <hr />
            <p>Stock Code: {stock.code} Price:{stock.price} Quantity:{stock.qty}</p>
            <hr />
            {/* here we show the current collection of stocks we bought (local state) */}
            <h3>Portfolio</h3>
            <ul id='currentPortfolio'>
                {currentPortfolio}
            </ul>
            <hr />
            {/* for debug */}
            <pre>{JSON.stringify(portfolio)}</pre>

        </section>
    );
}

export default StockForm