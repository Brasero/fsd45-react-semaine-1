import './App.css'
import {useState} from "react";
import List from "./component/List/index.jsx";
import Buttons from "./component/Buttons/index.jsx";

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
        ]
    })

    const handleClick = (name) => {
        if(state.list.includes(name)) {
            const listCopy = state.list.filter((elem) => elem !== name)
            setState({
                list: listCopy,
                button: [
                    ...state.button,
                    name
                ]
            })
        } else {
            const buttonCopy = state.button.filter((elem) => elem !== name)
            setState({
                button: buttonCopy,
                list: [
                    ...state.list,
                    name
                ]
            })
        }
    }


    return (
        <>
            <Buttons items={state.button} handleClick={handleClick} />
            <List items={state.list} handleClick={handleClick} />
        </>
    )
}

export default App
