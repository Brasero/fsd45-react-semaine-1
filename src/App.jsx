import './App.css'
import CalcForm from "./component/CalcForm/index.jsx";
import CalcButtons from "./component/CalcButtons/index.jsx";
import {useEffect, useReducer} from "react";
import calcReducer, {initialState} from "./Reducer/index.js";

function App() {

    const [state, dispatch] = useReducer(calcReducer, initialState)

    useEffect(() => {
        if(state.resultat !== '') {
            dispatch({type: 'increment'})
        }
    }, [state.resultat])

    useEffect(() => {
        if(state.count === 10) {
            dispatch({type: 'notify'})
        }
    }, [state.count]);


    return (
        <>
            <div>
                {
                    state.resultat
                }
            </div>
            <div>
                {
                    state.message
                }
            </div>
            <CalcForm state={state} dispatch={dispatch} />
            {
                state.error.length > 0 && <div style={{color: 'red'}}>{state.error}</div>
            }
            <CalcButtons state={state} dispatch={dispatch} />
        </>
    )
}

export default App
