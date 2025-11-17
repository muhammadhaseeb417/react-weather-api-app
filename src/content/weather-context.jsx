import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity, getWeatherDataFromPosition } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null)
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await getWeatherDataFromCity(searchCity)
        setData(response)
        setLoading(false);
    }

    const fetchCurrentUserLocation = async () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(async (position) => {
            const response = await getWeatherDataFromPosition(
                position.coords.latitude,
                position.coords.longitude
            );

            setData(response);
            setLoading(false);
        });
    };


    return (
        <WeatherContext.Provider value={{ data, loading, setSearchCity, fetchData, fetchCurrentUserLocation, searchCity }}>
            {props.children}
        </WeatherContext.Provider>
    );
};
