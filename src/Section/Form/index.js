import { useState } from "react";
import Currency from "./Currency";
import { currencies } from "./currencies";

const Form = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const onCurrentValue = ({ target }) => setCurrentValue(target.value);

  const keyPress = (event) => {
    if (!/[\d.]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const onSourceCurrencyChange = ({ target }) => {
    setSourceCurrency(target.value);
    target.value !== "PLN"
      ? setTargetCurrency("PLN")
      : setTargetCurrency("EUR");
  };

  const onTargetCurrencyChange = ({ target }) => {
    setTargetCurrency(target.value);
    target.value === "PLN"
      ? setSourceCurrency("EUR")
      : setSourceCurrency("PLN");
  };

  const getTargetValue = () => {
    const rate =
      sourceCurrency === "PLN"
        ? 1 / currencies[targetCurrency].buy
        : currencies[sourceCurrency].sell;

    return +currentValue * rate;
  };

  return (
    <form>
      <Currency
        label="Mam"
        placeholder="Wpisz kwotę"
        focusInput={true}
        readOnly={false}
        value={currentValue}
        onChangeValue={onCurrentValue}
        keyPress={keyPress}
        onSelectChange={onSourceCurrencyChange}
        selectValue={sourceCurrency}
      />
      <Currency
        label="Otrzymam"
        readOnly={true}
        value={getTargetValue().toFixed(2)}
        onSelectChange={onTargetCurrencyChange}
        selectValue={targetCurrency}
      />
    </form>
  );
};

export default Form;
