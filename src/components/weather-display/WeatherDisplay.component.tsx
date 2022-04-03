import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

export const WeatherDisplay: React.FC<any> = ({}) => {
	const { weather } = useContext(WeatherContext);

	console.log("Weather display", weather);

	return (
		<div>
			{weather ? (
				<div>
					{/* <div className="card w-96 bg-base-100 shadow-xl"> */}
					<div className="card bg-base-100 shadow-xl">
						{/* <div className="card glass bg-base-100 shadow-xl"> */}
						<figure>
							<img
								src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{weather.name}, {weather.sys.country}
							</h2>
							<p>Description: {weather.weather[0].description}</p>
							<p>
								Current temperature is {weather.main.temp}&#8451;. Highs of{" "}
								{weather.main.temp_max}&#8451; and lows of{" "}
								{weather.main.temp_min}&#8451;
							</p>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};
