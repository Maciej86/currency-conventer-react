import {useState} from "react";
import {currencySell, currencyBay} from "./valueCurrency"
import "./style.css"; 

const Form = () => {
    const [currentValue, setCurrentValue] = useState("");
    console.log(currencySell);

    return (
        <form>
            <div className="currency">
                <label htmlFor="iHave" className="currency__label">Mam</label>
                <input
                    value={currentValue}
                    onChange={({target}) => setCurrentValue(target.value)}
                    id="ihave" 
                    type="number" 
                    min="1" 
                    max="10000000" 
                    step="0.01" 
                    className="currency__control" 
                    placeholder="Wpisz kwotę"
                />

                <select name="ihave" className="currency__control" defaultValue={"pln"}>
                    {
                        currencySell.map(currency => (
                            <option key={currency.id} value={currency.value}>{currency.text}</option>
                        ))
                    }
                </select>
            </div>
            <div className="currency">
                <label htmlFor="iWillGet" className="currency__label">Otrzymam</label>
                <input id="iWillGet" type="text" className="currency__control" readOnly/>

                <select name="iWillGet" className="currency__control" defaultValue={"eur"}>
                    {
                        currencyBay.map(currency => (
                            <option key={currency.id} value={currency.value}>{currency.text}</option>
                        ))
                    }
                </select>
            </div>
        </form>
    )
};

export default Form;