import { useState } from "react";
import { currencies } from "./currencies";
import "./style.css";

const Form = () => {
	const [currentValue, setCurrentValue] = useState("");
	const [sourceCurrency, setSourceCurrency] = useState("PLN");
	const [targetCurrency, setTargetCurrency] = useState("EUR");

	const onCurrentValue = ({ target }) => setCurrentValue(target.value);
	const onSourceCurrencyChange = ({ target }) =>
		setSourceCurrency(target.value);
	const onTargetCurrencyChange = ({ target }) =>
		setTargetCurrency(target.value);

	const getTargetValue = () => {
		if (sourceCurrency === "PLN") {
			return +currentValue / currencies[targetCurrency].buy;
		}

		return +currentValue * currencies[sourceCurrency].sell;
	};

	return (
		<form>
			<div className="currency">
				<label htmlFor="iHave" className="currency__label">
					Mam
				</label>
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
					onChange={onSourceCurrencyChange}
					defaultValue={"PLN"}
					name="ihave"
					className="currency__control"
				>
					{Object.keys(currencies).map((currency) => (
						<option key={currency} value={currency}>
							{currencies[currency].label}
						</option>
					))}
				</select>
			</div>
			<div className="currency">
				<label htmlFor="iWillGet" className="currency__label">
					Otrzymam
				</label>
				<input
					value={getTargetValue().toFixed(2)}
					id="iWillGet"
					type="text"
					className="currency__control"
					readOnly
				/>

				<select
					onChange={onTargetCurrencyChange}
					defaultValue={"EUR"}
					name="iWillGet"
					className="currency__control"
				>
					{Object.keys(currencies).map((currency) => (
						<option key={currency} value={currency}>
							{currencies[currency].label}
						</option>
					))}
				</select>
			</div>
		</form>
	);
};

export default Form;
