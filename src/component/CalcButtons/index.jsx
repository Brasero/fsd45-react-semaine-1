
const CalcButtons = ({state, dispatch}) => {

    const isEmpty = state.number1.length === 0 || state.number2.length === 0 || state.error.length !== 0

    const addition = () => {
        dispatch({type: 'addition'})
    }

    const multiply = () => {
        dispatch({type: 'multiply'})
    }
    const reset = () => {
        dispatch({type: 'reset'})
    }

    return (
        <div>
            <button disabled={isEmpty} onClick={addition}>+</button>
            <button disabled={isEmpty} onClick={multiply}>x</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CalcButtons