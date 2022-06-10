import { useCurrency } from "./useCurrency";
import Currency from "./Currency";

const Form = ({ dataApi }) => {
  const {
    currentValue,
    sourceCurrency,
    targetCurrency,
    onCurrentValue,
    keyPress,
    onSourceCurrencyChange,
    onTargetCurrencyChange,
    getTargetValue,
  } = useCurrency(dataApi);

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
        currencies={dataApi}
      />
      <Currency
        label="Otrzymam"
        readOnly={true}
        value={getTargetValue().toFixed(2)}
        onSelectChange={onTargetCurrencyChange}
        selectValue={targetCurrency}
        currencies={dataApi}
      />
    </form>
  );
};

export default Form;
