import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
	const [currentDate, setCurrentDayAndTime] = useState(new Date());

	const formatDate = (currentDate) => {
		return (
			<time>
				{currentDate.toLocaleDateString(undefined, {
					weekday: "long",
					day: "numeric",
					month: "long",
				})}
				, {currentDate.toLocaleTimeString()}
			</time>
		);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDayAndTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <p className="clock">Dzisiaj jest {formatDate(currentDate)}</p>;
};

export default Clock;
