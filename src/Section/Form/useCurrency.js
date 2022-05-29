import { useState } from "react";
import { currencies } from "./currencies";

export const useCurrency = () => {
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

  return {
    currentValue,
    sourceCurrency,
    targetCurrency,
    onCurrentValue,
    keyPress,
    onSourceCurrencyChange,
    onTargetCurrencyChange,
    getTargetValue,
  };
};
