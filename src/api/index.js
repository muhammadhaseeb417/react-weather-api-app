export const getWeatherDataFromCity = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=yes`)
    return response.json()
}

export const getWeatherDataFromPosition = async (lat, long) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${lat},${long}&aqi=yes`)
    return response.json()
}