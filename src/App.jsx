import './App.css'
import {useEffect, useState} from "react";
import List from "./component/List/index.jsx";
import Buttons from "./component/Buttons/index.jsx";
import ArraySize from "./component/ArraySize/index.jsx";

function App() {

    const [state, setState] = useState({
        list: [
            'Bananes',
            'Fraises'
        ],
        button: [
            'Lait',
            'Eau',
            'Fromage'
        ],
        counter: -1
    })


    const array = Array(9).fill('')

    const handleClick = (name) => {
        if(state.list.includes(name)) {
            const listCopy = state.list.filter((elem) => elem !== name)
            setState({
                ...state,
                list: listCopy,
                button: [
                    ...state.button,
                    name
                ]
            })
        } else {
            const buttonCopy = state.button.filter((elem) => elem !== name)
            setState({
                ...state,
                button: buttonCopy,
                list: [
                    ...state.list,
                    name
                ]
            })
        }
    }

    useEffect(() => {
        setState({
            ...state,
            counter: state.counter + 1
        })
    }, [state.button, state.list])


    return (
        <>
            <div>Vous avez cliqué {state.counter} fois.</div>
            <Buttons items={state.button} handleClick={handleClick} />
            <List items={state.list} handleClick={handleClick} />
            <ArraySize list={state.list} name='de liste de courses' />
            <ArraySize list={state.button} name='de proposition' />
            <ArraySize list={array} name={'de test'} />
        </>
    )
}

export default App
