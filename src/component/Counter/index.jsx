import {useState, useEffect} from "react";


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

    const resetCounter = () => {
        stopCounter()
        setCounter(0)
    }

    const endCounter = () => {
        if (intervalId !== 0 ) {
            stopCounter()
        }
    }

    const stopCounter = () => {
        clearInterval(intervalId)
        setIntervalId(0)
    }

    useEffect(() => {
        if(counter >= 20) {
            stopCounter()
        }
    }, [counter])

    return (
        <>
            <button onClick={startCounter}>start +{number}</button>
            <button onClick={endCounter} disabled={intervalId === 0}>end</button>
            {
                counter > 0 && <div>{counter} /  {double}</div>
            }
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}

export default Counter;