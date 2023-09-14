export const initialWeatherState = {
    info: {}
}

const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                info: action.payload
            }

        case 'RESET_WEATHER':
            return initialWeatherState

        default:
            return state;
    }
}

export default weatherReducer