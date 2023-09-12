import {useState} from "react";


// Counter est un component qui s'attend à recevoir des props ({number})
// Lors de l'utilisation de Counter, il faudra lui passer ce props sous la forme suivante :
// <Counter number={8} />
const Counter = ({number}) => {
    const [counter, setCounter] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const double = counter * 2

    const startCounter = () => {
        const id = setInterval(() => {
            setCounter((prevState) => {
                return prevState + number
            })
        }, 1000)
        setIntervalId(id)
    }

    const endCounter = () => {
        if (intervalId !== 0 ) {
            clearInterval(intervalId)
            setIntervalId(0)
        }
    }

    return (
        <>
            <button onClick={startCounter}>start +{number}</button>
            <button onClick={endCounter} disabled={intervalId === 0}>end</button>
            {
                counter > 0 && <div>{counter} /  {double}</div>
            }
        </>
    )
}

export default Counter;