import {useState} from "react";


const Counter = ({number}) => {
    const [counter, setCounter] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [list, setList] = useState([
        {
            name: 'Paul'
        }
    ])

    const startCounter = () => {
        const id = setInterval(() => {
            setCounter((prevState) => {
                return prevState + number
            })
        }, 1000)
        setIntervalId(id)
        const copy = [...list]
        copy.push({name: 'jacques'})
        setList(copy);

        // equivalent mais plus cour à écrire
        // setList([
        //     ...list,
        //     {
        //         name: 'jacque'
        //     }
        // ])

        console.log(copy)
    }

    const endCounter = () => {
        if (intervalId !== 0 ) clearInterval(intervalId);
    }

    return (
        <>
            <button onClick={startCounter}>start +{number}</button>
            <button onClick={endCounter}>end</button>
            {
                counter > 0 && <div>{counter}</div>
            }
        </>
    )
}

export default Counter;