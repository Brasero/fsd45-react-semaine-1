import './App.css'
import {useEffect, useReducer} from "react";
import List from "./component/List/index.jsx";
import Buttons from "./component/Buttons/index.jsx";
import ArraySize from "./component/ArraySize/index.jsx";

// un reducer est une fonction qui prend un state et une action en entrée et nous retourne un nouveau state modifier comme précisé par l'action,
// l'argument action attendu par le reducer est un objet {} qui contiendra obligatoirement une propriété type et éventuellement un payload si necessaire
// voir ci-dessous
/*
const action = {
    type: 'addItem',
    payload: {
        name: 'Luc'
    }
}
*/
const reducer = (state, action) => {
    // dans un reducer, on effectuera un switch & case sur le type d'action reçu en paramètre, en fonction de la valeur de ce dernier
    // le reducer pourra effectuer différente modification sur une copie du state avant de nous en retourner un nouveau,
    // le cas échéant le reducer nous retournera le même state (cas default)
    switch (action.type) {
        case 'toggleItem':
            if(state.list.includes(action.payload.name)) {
                const button = [
                    ...state.button,
                    action.payload.name
                ]
                const filteredList = state.list.filter((item) =>  item !== action.payload.name)
                return {
                    ...state,
                    button,
                    list: filteredList
                }
            } else {
                const list = [
                    ...state.list,
                    action.payload.name
                ]
                const filteredButton =  state.button.filter((item) => item !== action.payload.name)

                return {
                    ...state,
                    list,
                    button: filteredButton
                }
            }


        case 'incrementCounter':
            return {
                ...state,
                counter: state.counter + 1
            }

        default:
            return state;
    }
}

function App() {

    const initialState = {
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
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const array = Array(9).fill('')

    const handleClick = (name) => {
        dispatch({
            type: 'toggleItem',
            payload: {
                name
            }
        })
    }

    useEffect(() => {
        dispatch({
            type: 'incrementCounter'
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
