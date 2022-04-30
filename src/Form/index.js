import {useState} from "react";
import {currencies} from "./currencies"
import "./style.css"; 

const Form = () => {
    const [currentValue, setCurrentValue] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("PLN");
    const [targetCurrency, setTargetCurrency] = useState("EUR");

    const onCurrentValue = ({target}) => setCurrentValue(target.value);
    const onSourceCurrency = ({target}) => setSourceCurrency(target.value);
    const onTargetCurrency = ({target}) => setTargetCurrency(target.value);

    const getTargetValue = () => {
        if(sourceCurrency === "PLN") {
            return (+currentValue / currencies[targetCurrency].buy).toFixed(2);  
        } else {
            return (+currentValue * currencies[sourceCurrency].buy).toFixed(2);
        }
    };

    const renderOption = () => {
        let option = [];
        for(const currency in currencies) {
            option = [
                ...option,
                {option: <option key={currency} value={currency}>{currencies[currency].label}</option>}
            ]
        };
        return option;
    };
    const render = renderOption();

    return (
        <form>
            <div className="currency">
                <label htmlFor="iHave" className="currency__label">Mam</label>
                <input
                    value={currentValue}
                    onChange={onCurrentValue}
                    id="ihave" 
                    type="number" 
                    min="1" 
                    max="10000000" 
                    step="0.01" 
                    className="currency__control" 
                    placeholder="Wpisz kwotę"
                />

                <select
                    onChange={onSourceCurrency}
                    defaultValue={"pln"}
                    name="ihave" 
                    className="currency__control" 
                >
                    {render.map(selectOption => (selectOption.option))}
                </select>
            </div>
            <div className="currency">
                <label htmlFor="iWillGet" className="currency__label">Otrzymam</label>
                <input 
                    value={getTargetValue()}
                    id="iWillGet" 
                    type="text" 
                    className="currency__control" 
                    readOnly
                />

                <select 
                    onChange={onTargetCurrency}
                    defaultValue={"EUR"}
                    name="iWillGet" 
                    className="currency__control" 
                >
                    {render.map(selectOption => (selectOption.option))}
                </select>
            </div>
        </form>
    )
};

export default Form;