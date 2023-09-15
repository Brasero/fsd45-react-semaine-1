import Sun from "./Sun"
import Rain from './Rain'
import Storm from './Storm'
import Cloudy from "./Cloudy"
import Foggy from './Foggy'
import Snowy from './Snowy'
const WeatherIcon = ({weather = ''}) => {

    return weather.match('dégagé') || weather.match('soleil') ? (<Sun />) :
        weather.match('pluie') ? (<Rain />) :
            weather.match('oraqe') ? (<Storm />) :
                weather.match('nuage') ? (<Cloudy />) :
                    weather.match('couvert') ? (<Foggy />) :
                    weather.match('neige') && (<Snowy/>)

}

export default WeatherIcon;