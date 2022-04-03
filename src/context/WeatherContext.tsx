import React, { createContext, useState } from "react";
import { fetchWeather } from "../fetch/fetch-weather";

const WeatherContext = createContext<any>(undefined);

export const WeatherProvider = ({ children }: any) => {
	const [weather, setWeather] = useState<{} | null>(null);

	const submitWeather = async (input: string) => {
		const data = await fetchWeather(input);
		setWeather(data);
	};

	const clearWeatherState = () => {
		setWeather(null);
	};

	return (
		<WeatherContext.Provider
			value={{ weather, submitWeather, clearWeatherState }}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
