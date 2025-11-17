import { useWeather } from "../content/weather-context"

function InfoCard() {
    const weatherState = useWeather()

    return (
        <div className="card">
            <h3 className="info">Info</h3>
            <img
                src={weatherState?.data?.current?.condition?.icon}
                alt="img"
                style={{ height: "80px" }}   // change value as you want
            />
            <p>Location: {weatherState?.data?.location?.name}, {weatherState?.data?.location?.region}, {weatherState?.data?.location?.country}</p>
            <p>Temperature: {weatherState?.data?.current?.temp_c}' C</p>
        </div >
    )
}

export default InfoCard