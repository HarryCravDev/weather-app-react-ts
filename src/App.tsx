import { WeatherProvider } from "./context/WeatherContext";
import WeatherContainer from "./components/weather-container/WeatherContainer.component";

function App() {
	return (
		<WeatherProvider>
			<div className="App  min-h-screen flex justify-center items-center flex-col	">
				<WeatherContainer></WeatherContainer>
			</div>
		</WeatherProvider>
	);
}

export default App;
