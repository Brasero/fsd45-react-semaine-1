import './calcButton.css'
import {useContext} from "react";
import {CalcContext} from "../Calculatrice/index.jsx";

const CalcButtons = () => {

    const {dispatch, handleLog} = useContext(CalcContext)

    const handleCalculate = (signe) => {
        dispatch({type: 'calculate', payload: signe})
        handleLog()
    }

    return (
        <div className={'calcButton'}>
            <button onClick={() => handleCalculate('+')}>+</button>
            <button onClick={() => handleCalculate('x')}>x</button>
            <button onClick={() => handleCalculate('-')}>-</button>
            <button onClick={() => handleCalculate('/')}>/</button>
            <button onClick={() => dispatch({type: 'equal'})}>=</button>
            <button onClick={() => dispatch({type: 'reset'})}>C</button>
        </div>
    )
}

export default CalcButtons