import { useWeather } from "../content/weather-context"
import WeatherCallBtn from "./weather-call-btns"

function SearchBar(props) {
    const weatherState = useWeather()

    return (
        <div className="searchbar-btn">
            <input value={props?.value ?? ''} onChange={(e) => weatherState.setSearchCity(e.target.value)} className="searchbar" type="text" placeholder="Search city" />
            <WeatherCallBtn value="Search" />
        </div>
    )
}

export default SearchBar