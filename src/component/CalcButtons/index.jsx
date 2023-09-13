import './calcButton.css'

const CalcButtons = ({dispatch}) => {

    const handleCalculate = (signe) => {
        dispatch({type: 'calculate', payload: signe})
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