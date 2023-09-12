import './App.css'
import arrayReducer, {initialState} from "./Reducer/index.js";
import {useReducer} from "react";

function App() {

    const regex = /^[a-zA-Z]{1}[a-zA-Z éè]*$/

    const [state, dispatch] = useReducer(arrayReducer, initialState)

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


    const suppressOne = (name) => {
        return {
            type: 'suppressOne',
            payload: name
        }
    }

    const addItem = (title) => {
        return {
            type: 'addItem',
            payload: {
                title,
                done: false
            }
        }
    }

    const toggleTaskAction = (task) => {
        return {
            type: 'toggleTask',
            payload: task
        }
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

    const toggleTask = (task) => {
        dispatch(toggleTaskAction(task))
    }

    return (
        <>
            <ul>
                {
                    state.tasks.length > 0 ? (
                        state.tasks.map((elem, index) => {
                            return <li key={`${elem.title}-${index}`}>
                                <input type={'checkbox'} onChange={() => toggleTask(elem)} checked={elem.done} />
                                {elem.title}
                                <button onClick={() => dispatch(suppressOne(elem))} style={red}>X</button>
                            </li>
                        })
                    ) : (
                        <div>Aucune tâche</div>
                    )
                }
            </ul>
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
