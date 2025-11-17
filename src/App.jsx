import { useEffect } from 'react'
import SearchBar from './components/search-bar'
import './app.css'
import InfoCard from './components/info-card'
import WeatherCallBtn from './components/weather-call-btns'
import { useWeather } from './content/weather-context'
import { getWeatherDataFromCity } from './api'

function App() {
  const weatherState = useWeather()

  useEffect(() => {
    weatherState.fetchCurrentUserLocation()
  }, [])

  return (
    <div className='main-app'>
      <h1>Weather Api App using React</h1>
      {weatherState.loading ? (
        <div className="loader"></div>  // 🔥 Show spinner
      ) : (
        <>
          <SearchBar value={weatherState?.searchCity} />
          <InfoCard />
          <WeatherCallBtn value="Refresh" />
        </>
      )}
    </div>
  )
}

export default App
