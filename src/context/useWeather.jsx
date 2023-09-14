import {createContext, useContext, useEffect, useReducer} from "react";
import weatherReducer, {initialWeatherState} from "../Reducer/weatherReducer.jsx";
import axios from "axios";

const API_KEY = "05703578c01c2c55a1646de5258c13d1";
const pathConstructor = ({lat, lon}) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr&units=metric`
}
const WeatherContext = createContext({})

export const useWeather = () => {
    return useContext(WeatherContext)
}

const ProvideWeather = () => {

    const [weather, dispatch] = useReducer(weatherReducer, initialWeatherState)

    const setPosition = (lat, lon, src) => {
        dispatch({type: 'SET_LOADING_WEATHER', payload: true})
        dispatch({
            type: 'SET_POSITION', payload: {
                position: {
                    lat,
                    lon
                },
                source: src
            }
        })
    }

    // Effet : Au chargement de la page la localisation de l'utilisateur est enregistrer dans
    // le sate de weatherReducer
    useEffect(() => {
        dispatch({
            type: 'SET_LOADING_WEATHER',
            payload: true
        })
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {longitude, latitude} = position.coords
                dispatch({
                    type: 'SET_POSITION',
                    payload: {
                        position: {
                            lat: latitude,
                            lon: longitude
                        },
                        source: 'position'
                    }
                })
                dispatch({
                    type: 'SET_LOADING_WEATHER',
                    payload: false
                })
            }
        )
    }, []);

    useEffect(() => {
        if (weather.position.lat && weather.position.lon) {
            dispatch({type: "SET_LOADING_WEATHER", payload: true})
            axios.get(pathConstructor(weather.position)).then((res) => {
                console.log(res.data, 'hello')
                dispatch({type: 'SET_WEATHER', payload: res.data})
                dispatch({type: "SET_LOADING_WEATHER", payload: false})
            })
        }
    }, [weather.position])

    return {
        weather,
        setPosition,
    }
}

const WeatherProvider = ({children}) => {
    const context = ProvideWeather()
    return <WeatherContext.Provider value={context}>
        {children}
    </WeatherContext.Provider>
}

export default WeatherProvider