import { useState, useEffect } from "react";
import './App.css';
import Weather from "./Weather";

const App = () => {
    const apiKey = '29f7dbbd7470b28ced9e372d41098ace';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

    const [searchTerm, setSearchTerm] = useState('');
    const [weather, setWeather] = useState({});

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status === 404 || response.status === 400) {
            setWeather({});
        } else {
            setWeather(await response.json());
            // setWeather({
            //     city: data.name,
            //     temp: data.main.temp,
            //     humidity: data.main.humidity,
            //     wind: data.wind.speed
            // });
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            checkWeather(searchTerm);
        }
    }

    useEffect(() => {
        checkWeather('nashville')
    }, []);

    console.log(weather);

    return (
        <div className='card'>
            <div className='search'>
                <input type='text' placeholder="Enter City Name" spellCheck='false' onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleEnter}></input>
                <button onClick={() => checkWeather(searchTerm)}>Search</button>
            </div>
            {Object.keys(weather).length > 0 ? <Weather weather={weather} /> : <h1>City Search</h1>}
        </div>
    )
}

export default App;
