import { useReducer, useState } from "react"


const StockformReducer = ()=>{
    // component logic
    const initialStock = {'code':'', 'price':0, 'qty':1}
    const formReducer = (state, data)=>{
        return {
            ...state, [data.field]:data.value
        }
    }
    // we used to have state
    // now we will use the reducer hook
    const [stock, dispatch] = useReducer(formReducer, initialStock)

    const handleChange = (e)=>{
        dispatch( { field:e.target.id, value:e.target.value } )
    }
    //some constants to use in the web document
    const qtyMin = 0
    const qtyMax = 100

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
                    onChange={handleChange} /><span>{stock.qty}</span>
                <button>Go </button>
            </form>
            <aside>
                {/* we can monitor any stateful values */}
                <p>Stock Code: {stock.code} Price:{stock.price} 
                    Quantity {stock.qty}</p>
            </aside>
        </section>
    )
}


export default StockformReducer