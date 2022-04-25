
function App() {
  return (
    <>
    <section className="conventer">
        <header>
            <h1>PRZELICZNIK WALUT</h1>
            <p>Prosty przelicznik walut</p>
        </header>
        <form className="js-form">
            <div className="currency">
                <label for="iHave" className="currency__label">Mam</label>
                <input id="ihave" type="number" min="1" max="10000000" step="0.01" className="currency__control js-valueCurrency" placeholder="Wpisz kwotę" autofocus/>
                <select name="ihave" className="currency__control js-currencyIhave">
                    <option value="pln" className="js-IhavePln" selected>PLN polski złoty</option>
                    <option value="eur" className="js-IhaveEur">EUR euro</option>
                    <option value="chf">CHF frank szwajcarski</option>
                    <option value="usd">USD dolar amerykański</option>
                </select>
            </div>
            <div className="currency">
                <label for="iWillGet" className="currency__label">Otrzymam</label>
                <input id="iWillGet" type="text" className="currency__control js-valueIwillGet" readonly/>
                <select name="iWillGet" className="currency__control js-currencyIWillGet">
                    <option value="pln" className="js-IWillGetPln">PLN polski złoty</option>
                    <option value="eur" className="js-IWillGetEur" selected>EUR euro</option>
                    <option value="chf">CHF frank szwajcarski</option>
                    <option value="usd">USD dolar amerykański</option>
                </select>
            </div>
        </form>
    </section>
    <footer className="footer">
        <p>Wykonanie w ramach nauki programowania <a href="https://youcode.pl" className="footer__ink">YouCode</a></p>
        <p>Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Visual Stories || Micheile</a> on <a href="https://unsplash.com/s/photos/money?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
    </footer>
    </>
  );
}

export default App;
