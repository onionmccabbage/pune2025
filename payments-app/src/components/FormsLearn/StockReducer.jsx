

const StockformReducer = ()=>{
    // component logic


    // UI
    return (
        // CAREFUL - all components must have ONE root tag
        <section>
            <form>
                {/* in React form fields are 'controlled' */}
                <input id="newStockCode" placeholder="Stock Code"
                    value={stock.code}
                    onChange={handleChange} />
                {/* add a field for 'stockPrice' controlled by a stateful model 'stockPrice */}
                <input type="number" id='newStockPrice' placeholder="Stock Price"
                    value={stock.price} min="0" 
                    onChange={handleChange}/>
                {/* User Experience Principles: give feedback */}
                <input type="range" id="newStockQuantity" 
                    value={stock.qty}
                    min={qtyMin} max={qtyMax} 
                    onChange={handleChange} /><span>{stockQty}</span>
                <button>Go </button>
            </form>
            <aside>
                {/* we can monitor any stateful values */}
                <p>Stock Code: {stockCode} Price:{stockPrice} Quantity {stockQty}</p>
            </aside>
        </section>
    )
}


export default StockformReducer