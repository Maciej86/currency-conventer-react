const Info = ({
  ratesDate,
  currencyDataApi,
  sourceSymbolCurrency,
  targetSymbolCurrency,
}) => {
  const rateCurrency = () =>
    sourceSymbolCurrency === "PLN"
      ? 1 / currencyDataApi[targetSymbolCurrency].sum
      : currencyDataApi[sourceSymbolCurrency].sum;

  const symbolCurrency = () =>
    sourceSymbolCurrency === "PLN"
      ? targetSymbolCurrency
      : sourceSymbolCurrency;

  return (
    <>
      <p>
        Aktualny na dzień <b>{ratesDate}</b>
      </p>
      <p>
        Bieżący kurs{" "}
        <b>
          {rateCurrency().toFixed(2)} {symbolCurrency()}
        </b>
      </p>
    </>
  );
};

export default Info;
