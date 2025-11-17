import { useState } from 'react'
import SearchBar from './components/search-bar'
import './app.css'
import InfoCard from './components/info-card'
import WeatherCallBtn from './components/weather-call-btns'

function App() {

  return (
    <div className='main-app'>
      <h1>Weather Api App using React</h1>
      <SearchBar />
      <InfoCard />
      <WeatherCallBtn value="Refresh" />
    </div>
  )
}

export default App
