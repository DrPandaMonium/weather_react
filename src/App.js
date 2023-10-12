import { useState, useEffect } from "react";
import './App.css'

const App = () => {
    const apiKey = '29f7dbbd7470b28ced9e372d41098ace';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

    const [searchTerm, setSearchTerm] = useState('');
    const [weather, setWeather] = useState({});

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            
        } else {
            let data = await response.json();
            // setWeather({
            //     city: data.name,
            //     temp: data.main.temp,
            //     humidity: data.main.humidity,
            //     wind: data.wind.speed
            // });
            console.log(data);
            setWeather({data})
        }
    }

    useEffect(() => {
        checkWeather('Nashville')
    }, []);

    console.log(weather);

    return (
        <div className='card'>
            <div className='search'>
                <input type='text' placeholder="Enter City Name" spellCheck='false' onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button onClick={() => checkWeather(searchTerm)}>Search</button>
            </div>
            <div className='weather'>
                <h1 className="temp">{weather.data.main.temp}°F</h1>
                <h2 className="city">{weather.data.name}</h2>
                <div className="details">
                    <div className="col">
                        <div>
                            <p className="humidity">{weather.data.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <p className="wind">{weather.data.wind.speed}km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;