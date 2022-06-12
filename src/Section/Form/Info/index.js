const Info = ({
  currentDateApi,
  currencyDataApi,
  sourceCurrency,
  targetCurrency,
}) => {
  const rateCurrency = () =>
    sourceCurrency === "PLN"
      ? 1 / currencyDataApi[targetCurrency].sum
      : currencyDataApi[sourceCurrency].sum;

  const symbolCurrency = () =>
    sourceCurrency === "PLN" ? targetCurrency : sourceCurrency;

  return (
    <>
      <p>
        Aktualny na dzień <b>{currentDateApi}</b>
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
