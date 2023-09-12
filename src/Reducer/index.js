export const initialState = {
    tasks: [],
    inputValue: '',
    inputError: ''
}

const arrayReducer = (state, action) => {
    switch(action.type) {

        case 'suppressOne':
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.title !== action.payload.title)
            }

        case 'addItem':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ],
                inputValue: '',
                inputError: ''
            }

        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'toggleTask':
            const newTasks = state.tasks.map((elem) =>  {
                if(elem.title === action.payload.title) {
                    return {
                        ...elem,
                        done: !elem.done
                    }
                }
                return elem
            })
            return {
                ...state,
                tasks: newTasks
            }

        default:
            return state;
    }
}

export default arrayReducer