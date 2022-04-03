import React from "react";
import { UserInput } from "../user-input/Input.component";
import { WeatherDisplay } from "../weather-display/WeatherDisplay.component";

const WeatherContainer: React.FC = () => {
	return (
		<div>
			<div className="card glass p-10 w-96 mb-5">
				<h1 className="text-3xl font-bold text-center pb-5">Weather App</h1>
				<UserInput />
				<WeatherDisplay />
			</div>
		</div>
	);
};

export default WeatherContainer;
