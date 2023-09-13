
export const initialState = {
    currentNumber: 0,
    prevNumber: 0,
    lastAction: ''
}


function calc(state) {
    const current = parseFloat(state.currentNumber)
    const prev = parseFloat(state.prevNumber)
    const action = state.lastAction
    return action === '' ? current :
        action === '+' ? prev + current :
            action === '-' ? prev - current :
                action === 'x' ? prev * current :
                    prev / current
}

const calcReducer = (state, action) => {
    switch(action.type) {

        case 'changeValue':
            const newCurrent = state.currentNumber === 0 ?
                (action.payload === '.' ? state.currentNumber.toString() + action.payload
                    :
                    action.payload)
                : state.currentNumber.toString() + action.payload.toString()
            return {
                ...state,
                currentNumber: newCurrent
            }

        case "calculate":
            return {
                ...state,
                currentNumber: 0,
                prevNumber: calc(state),
                lastAction: action.payload
            }

        case "equal":
            return {
                ...state,
                currentNumber: calc(state),
                prevNumber: 0,
                lastAction: ''
            }

        case 'reset':
            return initialState;



        default:
            return state;
    }
}

export default calcReducer