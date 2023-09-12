import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./component/Counter";

// App est un composant fonctionnel, c'est une fonction qui rassemble logique et rendu,
// tout composant fonctionnel doit retourner une seule balise JSX qui peut en contenir un ensemble.
function App() {
    // useState est un hook fourni par la librairie React,
    // il permet de mettre en place un état local, c'est-à-dire une ou des valeurs qui appartiennent au component
    const [msg, setMsg] = useState(0)
    const [intervalId, setIntervalId] = useState(0)

    const startCounter = () => {
        const id = setInterval(() => {
            // La fonction setMsg et un setter, il permet de modifier le state auquel il est liée, ce dérnier étant immutable,
            // la fonction de setter représente le seul moyen de modifier la valeur d'un state.
            setMsg((prevState) => {
                return prevState + 1
            })
            // Lors de la modification d'un state, il est necessaire de ne pas manipuler le store directement,
            // on préfèrera plutôt manipuler une copie de ce dernier pour passer ensuite la copie modifier au setter
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
            // La notation ci-dessous est une ternaire,
            // elle équivaut à la condition suivante :
            // if (msg > 0) return <div>{msg}</div>
            msg > 0 && <div>{msg}</div>
        }
        <Counter number={1} />
        <Counter number={5} />
    </>
  )
}

export default App
