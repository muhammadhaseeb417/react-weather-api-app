import WeatherCallBtn from "./weather-call-btns"

function SearchBar() {
    return (
        <div className="searchbar-btn">
            <input className="searchbar" type="text" placeholder="Search city" />
            <WeatherCallBtn value="Search" />
        </div>
    )
}

export default SearchBar