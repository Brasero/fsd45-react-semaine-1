import './calcButton.css'
import {useContext} from "react";
import {CalcContext} from "../Calculatrice/index.jsx";
import {ThemeContext} from "../../context/ThemeContext.jsx";

const CalcButtons = () => {

    const {dispatch, handleLog} = useContext(CalcContext)
    const {themeValue} = useContext(ThemeContext)

    const handleCalculate = (signe) => {
        dispatch({type: 'calculate', payload: signe})
        handleLog()
    }

    return (
        <div className={'calcButton'}>
            <button style={themeValue} onClick={() => handleCalculate('+')}>+</button>
            <button style={themeValue} onClick={() => handleCalculate('x')}>x</button>
            <button style={themeValue} onClick={() => handleCalculate('-')}>-</button>
            <button style={themeValue} onClick={() => handleCalculate('/')}>/</button>
            <button style={themeValue} onClick={() => dispatch({type: 'equal'})}>=</button>
            <button onClick={() => dispatch({type: 'reset'})}>C</button>
        </div>
    )
}

export default CalcButtons