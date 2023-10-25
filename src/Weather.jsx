import React from "react";

const Weather = ({ weather }) => {
    return (
        <div className='weather'>
                <h1 className="temp">{weather.main.temp}°F</h1>
                <h2 className="city">{weather.name}</h2>
                <div className="details">
                    <div className="col">
                        <div>
                            <p className="humidity">{weather.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <p className="wind">{weather.wind.speed}km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Weather;