
const CalcButtons = ({state, dispatch}) => {

    const isEmpty = state.currentNumber.length === 0 || state.error.length !== 0

    const canCalculate = (state.lastAction === '/' && parseFloat(state.currentNumber) === 0)

    const addition = () => {
        dispatch({type: 'addition'})
    }

    const multiply = () => {
        dispatch({type: 'multiply'})
    }
    const reset = () => {
        dispatch({type: 'reset'})
    }

    const calcutate = () => {
        dispatch({type: 'calculate'})
    }

    const soustract = () => {
        dispatch({type: 'soustract'})
    }

    const divide = () => {
        dispatch({type: 'divide'})
    }
    return (
        <div>
            <button disabled={isEmpty} onClick={addition}>+</button>
            <button disabled={isEmpty} onClick={multiply}>x</button>
            <button disabled={isEmpty} onClick={soustract}>-</button>
            <button disabled={isEmpty} onClick={divide}>/</button>
            <button disabled={canCalculate || isEmpty} onClick={calcutate}>=</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CalcButtons