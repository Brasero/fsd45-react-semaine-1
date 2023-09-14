export const initialTownState = {
    towns: [],
    loading: false
}

const townReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_VILLE':
            return {
                ...state,
                towns: action.payload,
                loading: false
            }

        case 'LOADING_VILLE':
            return {
                ...state,
                loading: true
            }

        case 'RESET_VILLE':
            return initialTownState

        default:
            return state
    }
}

export default townReducer