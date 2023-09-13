
export const initialState = {
    currentNumber: '',
    prevNumber: 0,
    lastAction: '',
    resultat: '',
    error: '',
    count: 0,
    message: ''
}

const normalize = (num) => parseFloat(num.replace(',','.'))

const calcReducer = (state, action) => {
    let calc;
    switch(action.type) {

        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'addition':
            return {
                ...state,
                prevNumber: parseFloat(state.currentNumber),
                currentNumber: '',
                lastAction: '+',
                error: ''
            }

        case 'multiply':
            return {
                ...state,
                prevNumber: parseFloat(state.currentNumber),
                currentNumber: '',
                lastAction: '*',
                error: ''
            }

        case 'soustract':
            return {
                ...state,
                prevNumber: parseFloat(state.currentNumber),
                currentNumber: '',
                lastAction: '-',
                error: ''
            }

        case 'divide':
            return {
                ...state,
                prevNumber: parseFloat(state.currentNumber),
                currentNumber: '',
                lastAction: '/',
                error: ''
            }

        case 'calculate':
            return {
                ...state,
                currentNumber: '',
                prevNumber: 0,
                resultat: state.lastAction === '+' ? state.prevNumber + parseFloat(state.currentNumber) :
                    state.lastAction === '*' ? state.prevNumber * parseFloat(state.currentNumber) :
                        state.lastAction === '-' ? state.prevNumber - parseFloat(state.currentNumber) :
                            state.prevNumber / parseFloat(state.currentNumber)
            }


        default:
            return state;
    }
}

export default calcReducer