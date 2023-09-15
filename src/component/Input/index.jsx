import './input.scss'
import {useTown} from "../../context/useTown.jsx";
import {useState} from "react";
import {useWeather} from "../../context/useWeather.jsx";

const Input = () => {

    const {searchTown, town} = useTown();
    const {setPosition} = useWeather();
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setValue(value)
        if (value.length > 2) searchTown(value)
    }

    const handleClick = (lat, lon, name) => {
        setPosition(lat, lon, 'api')
        setValue(name)
        searchTown('')
    }


    return (
        <form className={'form'} onSubmit={e => e.preventDefault()}>
            <div className={'inputGroup'}>
                <input placeholder={'Saisissez votre ville.'} value={value} onChange={handleChange}/>
            </div>
            {
                town.loading || town.towns.length > 0 && (
                    <div className={'propositions'}>
                        {
                            town.towns.map((t, index) => {
                                console.log(t)
                                const {name} = t.properties
                                const [lon, lat] = t.geometry.coordinates
                                return <div
                                    key={index}
                                    className={'item'}
                                    onClick={() => handleClick(lat, lon, name)}
                                >
                                    {name}
                                </div>
                            })
                        }
                    </div>
                )
            }
        </form>
    )
}

export default Input