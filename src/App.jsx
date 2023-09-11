import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./component/Counter";
import Hello from "./component/Hello/index.jsx";

function App() {
    const [msg, setMsg] = useState(0)
    const [intervalId, setIntervalId] = useState(0)

    const startCounter = () => {
        const id = setInterval(() => {
            setMsg((prevState) => {
                return prevState + 1
            })
        }, 1000)
        setIntervalId(id)
    }

    const endCounter = () => {
        if (intervalId !== 0) clearInterval(intervalId);
    }

    return (
        <>
            <Hello name={'Paul-Roselle'} />
            <section>Ma section</section>
            <Counter number={1}/>
        </>
    )
}

export default App
