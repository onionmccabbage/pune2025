const StockForm = ()=>{
    // component logic

    // component content (what the user sees)
    return (
        // CAREFUL - all components must have ONE root tag
        <section>
            <form>
                <input placeholder="Stock Code" />

                <button>
                    Go
                </button>
            </form>
        </section>
    )
}
export default StockForm