import "./style.css"; 

const Form = () => {

    return (
        <form>
            <div className="currency">
                <label for="iHave" className="currency__label">Mam</label>
                <input id="ihave" type="number" min="1" max="10000000" step="0.01" className="currency__control" placeholder="Wpisz kwotę"/>
                <select name="ihave" className="currency__control">
                    <option value="pln" selected>PLN polski złoty</option>
                    <option value="eur">EUR euro</option>
                    <option value="chf">CHF frank szwajcarski</option>
                    <option value="usd">USD dolar amerykański</option>
                </select>
            </div>
            <div className="currency">
                <label for="iWillGet" className="currency__label">Otrzymam</label>
                <input id="iWillGet" type="text" className="currency__control" readOnly/>
                <select name="iWillGet" className="currency__control">
                    <option value="pln">PLN polski złoty</option>
                    <option value="eur" selected>EUR euro</option>
                    <option value="chf">CHF frank szwajcarski</option>
                    <option value="usd">USD dolar amerykański</option>
                </select>
            </div>
        </form>
    )
};

export default Form;