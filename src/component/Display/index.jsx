import './display.scss';
import {useWeather} from "../../context/useWeather.jsx";
import WeatherIcon from '../Animation/WeatherIcon'

const Display = () => {

    const {weather} = useWeather();
    console.log(weather)
    const {info} = weather;
    const description = info.weather?.length > 0 ? info.weather[0].description : ''
    const temp = info.main?.temp.toFixed(0)
    const tempClass = temp < 20 ? 'item temp cold' : 'item temp hot'
    return (
        <div className={'container'}>
            {
                weather.isLoading ? 'chargement...' :
                    <>
                        <div className={'display-head'}>
                            {info.name} <br/>
                            {description}
                        </div>
                        <div className="icon-app">
                            <WeatherIcon weather={description} />
                        </div>
                        <div className={'row'}>
                            <div className={tempClass}>{temp}°C</div>
                        </div>
                        <div className={'row'}></div>
                    </>
            }
        </div>
    )
}

export default Display;