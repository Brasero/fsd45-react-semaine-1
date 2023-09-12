import './App.css'
import arrayReducer, {initialState} from "./Reducer/index.js";
import {useReducer, useState} from "react";

function App() {

    const regex = /^[a-zA-Z]{1}[a-zA-Z éè]*$/

    const [state, dispatch] = useReducer(arrayReducer, initialState)

    const [inputValue, setInputValue] = useState('')
    const [inputError, setInputError] = useState('')

    const red = {
        background: 'red'
    }

    const chanValueAction = (name, value) => {
        return {
            type: 'changeValue',
            payload: {
                name,
                value
            }
        }
    }

    const handleChange = (e) => {
        const {value} = e.target
        const test = regex.test(value)
        if(!test) {
            dispatch(chanValueAction('inputError', 'Le champ contient des caractères non autorisée.'))
        } else {
            dispatch(chanValueAction('inpuError', ''))
        }
        dispatch(chanValueAction('inputValue', value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const test = regex.test(state.inputValue)
        if(!test) {
            dispatch(chanValueAction('inputError', 'Le champ contient des caractères non autorisée.'))
        } else {
            dispatch(addItem(state.inputValue))
        }
    }

    const suppressOne = (name) => {
        return {
            type: 'suppressOne',
            payload: name
        }
    }

    const addItem = (payload) => {
        return {
            type: 'addItem',
            payload
        }
    }

    return (
        <>
            <ul>
                {
                    state.array.map((elem, index) => {
                        return <li key={`${elem}-${index}`}>
                            {elem}
                            <button onClick={() => dispatch(suppressOne(elem))} style={red}>X</button>
                        </li>
                    })
                }
            </ul>
            <button onClick={() => dispatch({type: 'reverse'})}>Reverse</button>
            <button onClick={() => dispatch({type: 'suppressLast'})}>Suppress</button>
            <form onSubmit={handleSubmit}>
                <input type={'text'} onChange={handleChange} value={state.inputValue} />
                <input type={'submit'} value={'enregistrer'} />
                {
                    state.inputError.length > 0 && <span style={{color: 'red'}}>{state.inputError}</span>
                }
            </form>
        </>
    )
}

export default App
