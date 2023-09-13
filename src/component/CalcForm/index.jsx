
const CalcForm = ({state, dispatch}) => {

    const regex = /^\d+(?:[.,]\d+)?$/
    const handleChange = (e) => {
        const {name, value} = e.target
        const test = regex.test(value)
        let error = '';
        if(!test) {
            error = 'Le champ n\'est pas valide'
        }
        dispatch({type: 'changeValue', payload: {name, value}})
        dispatch({type: 'changeValue', payload: {name: 'error', value: error}})
    }

    return (
        <form>
            <label>
                Nombre 1 :
                <input type={'text'} onChange={handleChange} name={'number1'} value={state.number1} />
            </label>
            <label>
                Nombre 2 :
                <input type={'text'} onChange={handleChange} name={'number2'} value={state.number2} />
            </label>
        </form>
    )
}

export default CalcForm;