import {useAxios} from "../../context/useAxios.jsx";
import {useEffect, useState} from "react";


const CiptyInput = () => {

    const {get, cities, setCities} = useAxios();
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const handleChange = (e) => {
        const {value} = e.target
        setValue(value)
    }

    useEffect(() => {
        if(value.length > 2) {
            get('search', {
                params: {
                    q: value.replace(/ /g, '+'),
                    type: 'municipality'
                }
            }).then((res) => {
                const {data} = res
                if (data.features.length > 0) {
                    setIsOpen(true)
                    const apiCities = data.features.reduce((acc, current) => {
                        const {properties} = current
                        acc.push(`${properties.city} (${properties.citycode})`)
                        return acc
                    }, [])
                    setCities(apiCities)
                } else {
                    setIsOpen(false)
                    setCities([])
                }
            })
        } else {
            setCities([])
            setIsOpen(false)
        }
    }, [value]);

    return (
        <form>
            <input type={'text'} name={'search'} value={value} onChange={handleChange} />
            {
                isOpen && (
                    <div>
                        {
                            cities.map((city, index) => {
                                return <span key={index}>{city}</span>
                            })
                        }
                    </div>
                )
            }
        </form>
    )
}

export default CiptyInput;