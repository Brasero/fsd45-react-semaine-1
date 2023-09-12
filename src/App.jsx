import './App.css'
import {useEffect, useReducer, useState} from "react";
import List from "./component/List/index.jsx";
import Buttons from "./component/Buttons/index.jsx";
import ArraySize from "./component/ArraySize/index.jsx";
import {createPortal} from "react-dom";

/*
const action = {
    type: 'addItem',
    payload: {
        name: 'Luc'
    }
}
*/
const reducer = (state, action) => {
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
