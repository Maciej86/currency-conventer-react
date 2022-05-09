import { currencies } from "../currencies";
import "./style.css";

const Currency = ({
	label,
	placeholder,
	readOnly,
	value,
	onChangeValue,
	onSelectChange,
	selectValue,
}) => {
	return (
		<div className="currency">
			<label htmlFor={label} className="currency__label">
				{label}
			</label>
			<input
				value={value}
				onChange={onChangeValue}
				id={label}
				type="number"
				min="1"
				max="10000000"
				step="0.01"
				className="currency__control"
				placeholder={placeholder}
				readOnly={readOnly}
			/>

			<select
				onChange={onSelectChange}
				value={selectValue}
				className="currency__control"
			>
				{Object.keys(currencies).map((currency) => (
					<option key={currency} value={currency}>
						{currencies[currency].label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Currency;
