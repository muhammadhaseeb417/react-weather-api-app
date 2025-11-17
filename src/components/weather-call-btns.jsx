import { useWeather } from "../content/weather-context"

function WeatherCallBtn(props) {
    const weatherState = useWeather()

    return (
        <div>
            <button className="btn" onClick={() => weatherState.fetchData()}>{props.value}</button>
        </div>
    )
}

export default WeatherCallBtn