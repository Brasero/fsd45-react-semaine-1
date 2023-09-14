import {useTown} from "../../context/useTown.jsx";
import {useState} from "react";

const Input = () => {

    const {searchTown, town} = useTown();
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setValue(value)
        if (value.length > 2) searchTown(value)
    }


    return (
        <form>
            <input value={value} onChange={handleChange}/>
            {
                town.loading || town.towns.length > 0 && (
                    <div className={'propositions'}>
                        {
                            town.towns.map((t, index) => {
                                console.log(t)
                                const {name} = t.properties
                                const [lat, lon] = t.geometry.coordinates
                                return <div key={index} className={'item'}>{name}</div>
                            })
                        }
                    </div>
                )
            }
        </form>
    )
}

export default Input