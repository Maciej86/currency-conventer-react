import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
	const [currentDayAndTime, setCurrentDayAndTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDayAndTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<p className="clock">
			<time>
				Dzisiaj jest{" "}
				{currentDayAndTime.toLocaleDateString(undefined, {
					weekday: "long",
					day: "numeric",
					month: "long",
				})}
				, {currentDayAndTime.toLocaleTimeString()}
			</time>
		</p>
	);
};

export default Clock;
