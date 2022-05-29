import { WrapperCurrency, Label, ControlForm } from "./styled";
import { currencies } from "../currencies";
import { useEffect, useRef } from "react";

const Currency = ({
  label,
  placeholder,
  focusInput,
  readOnly,
  value,
  onChangeValue,
  keyPress,
  onSelectChange,
  selectValue,
}) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    if (focusInput) {
      inputFocus.current.focus();
    }
  }, [focusInput]);

  return (
    <WrapperCurrency>
      <Label htmlFor={label}>{label}</Label>
      <ControlForm
        value={value}
        onChange={onChangeValue}
        onKeyPress={keyPress}
        id={label}
        ref={inputFocus}
        type="number"
        min="1"
        max="10000000"
        step="0.01"
        placeholder={placeholder}
        readOnly={readOnly}
      />

      <ControlForm
        as="select"
        onChange={onSelectChange}
        value={selectValue}
        className="currency__control"
      >
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currencies[currency].label}
          </option>
        ))}
      </ControlForm>
    </WrapperCurrency>
  );
};

export default Currency;
