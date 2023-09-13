
export const initialState = {
    number1: '',
    number2: '',
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
            calc = normalize(state.number1) + normalize(state.number2)
            return isNaN(calc) ? {
                ...state,
                error: 'Un probleme est survenue lors du calcul'
            } : {
                ...state,
                number1: '',
                number2: '',
                resultat: calc,
                error: ''
            }

        case 'multiply':
            calc = normalize(state.number1) * normalize(state.number2)
            return isNaN(calc) ? {
                ...state,
                error: 'Un probleme est survenue lors du calcul'
            } : {
                ...state,
                number1: '',
                number2: '',
                resultat: calc,
                error: ''
            }

        case 'reset':
            return initialState;

        case 'increment':
            return {
                ...state,
                count: state.count + 1,
                message: ''
            }

        case 'notify':
            return {
                ...state,
                count: 0,
                message: 'Vous avez efféctuer 10 calculs.'
            }


        default:
            return state;
    }
}

export default calcReducer