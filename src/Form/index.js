import {useState} from "react";
import {currencySell, currencyBay} from "./dataCurrency"
import "./style.css"; 

const Form = () => {
    const [currentValue, setCurrentValue] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("eur");

    const getCurrentValue = ({target}) => setCurrentValue(target.value);
    const getTargetCurrency = ({target}) => setTargetCurrency(target.value);

    const targetPrice = currencyBay.find(({nameCurrency}) => nameCurrency === targetCurrency).price;
    const targetValue = (+currentValue  / targetPrice).toFixed(2);

    return (
        <form>
            <div className="currency">
                <label htmlFor="iHave" className="currency__label">Mam</label>
                <input
                    value={currentValue}
                    onChange={getCurrentValue}
                    id="ihave" 
                    type="number" 
                    min="1" 
                    max="10000000" 
                    step="0.01" 
                    className="currency__control" 
                    placeholder="Wpisz kwotę"
                />

                <select
                    onChange={setSourceCurrency}
                    defaultValue={"pln"}
                    name="ihave" 
                    className="currency__control" 
                >
                    { currencySell.map(currency => (
                        <option key={currency.id} value={currency.nameCurrency}>{currency.text}</option>
                    ))}
                </select>
            </div>
            <div className="currency">
                <label htmlFor="iWillGet" className="currency__label">Otrzymam</label>
                <input 
                    value={targetValue}
                    id="iWillGet" 
                    type="text" 
                    className="currency__control" 
                    readOnly
                />

                <select 
                    onChange={getTargetCurrency}
                    defaultValue={"eur"}
                    name="iWillGet" 
                    className="currency__control" 
                >
                    { currencyBay.map(currency => (
                        <option key={currency.id} value={currency.nameCurrency}>{currency.text}</option>
                    ))}
                </select>
            </div>
        </form>
    )
};

export default Form;