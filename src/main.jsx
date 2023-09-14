import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TownContextProvider from "./context/useTown.jsx";
import WeatherProvider from "./context/useWeather.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <WeatherProvider>
            <TownContextProvider>
                <App/>
            </TownContextProvider>
        </WeatherProvider>
    </React.StrictMode>,
)
