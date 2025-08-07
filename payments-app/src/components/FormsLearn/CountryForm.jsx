import { useState } from "react";

const CountryForm = () => {
    const [countryCode, setCountryCode] = useState('') // no initial value
    const [countryName, setCountryName] = useState('') // no initial value
    const [countryCurrency, setCountryCurrency] = useState('') // initial state is zero
    const changeCountryCode = (e) => {
        const code = e.target.value;
        setCountryCode(code)
    }
    const changeCountryName = (e) => {
        const name = e.target.value;
        setCountryName(name)
    }

    const changeCountryCurrency = (e) => {
        const currency = e.target.value;
        setCountryCurrency(currency)
    }
    return (
        <section>
            {/* notice we do not need a form tag */}
                <input id="newCountryCode" placeholder="Country Code"
                    value={countryCode} onChange={changeCountryCode} /><br />
                <input id="newCountryName" placeholder="Country Name"
                    value={countryName} onChange={changeCountryName} /><br/>
                <input id='newCountryCurrency'
                    value={countryCurrency} onChange={changeCountryCurrency} />
                <button>Go</button>
            <hr />
            <p>Code: {countryCode} Name:{countryName} Currency:{countryCurrency}</p>
            <hr />
        </section>
    );
}

export default CountryForm