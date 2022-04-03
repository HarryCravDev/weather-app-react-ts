import React, { useState, useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

export const UserInput: React.FC<any> = ({}) => {
	const { weather, submitWeather, clearWeatherState } =
		useContext(WeatherContext);

	const [input, setInput] = useState<string>("");

	const onSubmit = (e: React.FormEvent<HTMLFormElement> | null) => {
		e && e.preventDefault();

		if (!input) {
			return;
		}

		submitWeather(input);
	};

	const clearWeather = () => {
		setInput("");
		clearWeatherState();
	};

	return (
		<div className="mb-2 grid grid-flow-row">
			<form className="mb-2" onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Type a city here + Enter key"
					className="input w-full max-w-xs input-bordered input-accent"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>

			{weather ? (
				<button className="btn btn-primary" onClick={clearWeather}>
					Clear
				</button>
			) : (
				<button
					className="btn btn-primary"
					disabled={!input}
					onClick={() => onSubmit(null)}
				>
					Search
				</button>
			)}
		</div>
	);
};
