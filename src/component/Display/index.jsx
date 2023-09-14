import {useWeather} from "../../context/useWeather.jsx";

const Display = () => {

    const {weather} = useWeather();
    console.log(weather)
    const {info} = weather;
    return (
        <div className={'container'}>
            {
                weather.isLoading ? 'chargement...' :
                    <>
                        <div className={'display-head'}>
                            {info.name}
                        </div>
                        <div className="icon">
                            {/* place icon here */}
                        </div>
                        <div className={'row'}>
                            <div className={'item'}>{info.main?.temp.toFixed(0)}°C</div>
                        </div>
                        <div className={'row'}></div>
                    </>
            }
        </div>
    )
}

export default Display;