import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./component/Counter";

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
      <section>Ma section</section>
      <button onClick={startCounter}>start</button>
        <button onClick={endCounter} disabled={intervalId === 0}>End</button>
        {
            msg > 0 && <div>{msg}</div>
        }
        <Counter number={1} />
        <Counter number={5} />
    </>
  )
}

export default App
