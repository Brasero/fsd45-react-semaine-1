const initialArray = [
    "Premier élément",
    "Deuxième élément",
    "Troisième élément",
    "Quatrième élément",
    "Cinquième élément",
    "Sixième élément",
    "Septième élément",
    "Huitième élément",
    "Neuvième élément",
    "Dixième élément"
];

export const initialState = {
    array: initialArray,
    inputValue: '',
    inputError: ''
}

const arrayReducer = (state, action) => {
    switch(action.type) {
        case 'reverse':
            return {
                ...state,
                array: [...state.array].reverse()
            }

        case 'suppressLast':
            return {
                ...state,
                array: state.array.slice(0, -1)
            }

        case 'suppressOne':
            return {
                ...state,
                array: state.array.filter((item) => item !== action.payload)
            }

        case 'addItem':
            return state.array.includes(action.payload) ?
                {
                    ...state,
                    inputError: `La valeur ${action.payload} existe déjà dans le tableau`,
                    inputValue: ''
                } : {
                    ...state,
                    array: [
                        ...state.array,
                        action.payload
                    ],
                    inputError: '',
                    inputValue: ''
                }


        case 'changeInputValue':
            return {
                ...state,
                inputValue: action.payload
            }

        case 'setInputError':
            return {
                ...state,
                inputError: action.payload
            }

        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        default:
            return state;
    }
}

export default arrayReducer