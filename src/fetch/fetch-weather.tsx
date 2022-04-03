import axios, { AxiosResponse } from "axios";
export const fetchWeather = async (location: string) => {
	const { data }: AxiosResponse<any, any> = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
	);

	return data;
};
