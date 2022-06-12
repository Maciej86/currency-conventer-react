const Info = ({
  ratesDate,
  currencyDataApi,
  sourceSymbolCurrency,
  targetSymbolCurrency,
}) => {
  const rateCurrency = () =>
    sourceSymbolCurrency === "PLN"
      ? currencyDataApi[targetSymbolCurrency].sum
      : 1 / currencyDataApi[sourceSymbolCurrency].sum;

  const symbolTargetCurrency = () =>
    sourceSymbolCurrency === "PLN" ? targetSymbolCurrency : "PLN";

  const symbolSourceCurrency = () =>
    sourceSymbolCurrency !== "PLN" ? sourceSymbolCurrency : "PLN";

  return (
    <>
      <p>
        Aktualny na dzień <b>{ratesDate}</b>
      </p>
      <p>
        Bieżący kurs{" "}
        <b>
          1 {symbolTargetCurrency()} = {rateCurrency().toFixed(2)}{" "}
          {symbolSourceCurrency()}
        </b>
      </p>
    </>
  );
};

export default Info;
