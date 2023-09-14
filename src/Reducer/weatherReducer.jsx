export const initialWeatherState = {
    info: {},
    position: {
        lat: null,
        lon: null
    },
    basedOnLocation: false,
    isLoading: false
}

const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                info: action.payload
            }

        case 'RESET_WEATHER':
            return {
                ...state,
                info: {}
            }

        case 'SET_POSITION':
            return {
                ...state,
                position: {...action.payload.position},
                basedOnLocation: action.payload.source === 'position'
            }

        case 'RESET_POSITION':
            return {
                ...state,
                position: {
                    lat: null,
                    lon: null
                }
            }

        case 'SET_LOADING_WEATHER':
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
}

export default weatherReducer